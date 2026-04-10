# 部署与内容管理说明

## 一、网站发布（GitHub Pages）

1. 在 GitHub 新建仓库，将本项目推送至 **`main`** 分支。
2. 打开仓库 **Settings → Pages**：
   - **Source** 选择 **Deploy from a branch**
   - **Branch** 选 **`gh-pages`**，目录 **`/(root)`**
   - 保存后等待几分钟，站点地址一般为：  
     - 项目仓库：`https://<用户名>.github.io/<仓库名>/`  
     - 用户站点（仓库名必须为 `<用户名>.github.io`）：`https://<用户名>.github.io/`
3. 首次推送 `main` 后，工作流 **Deploy to GitHub Pages** 会自动构建并把 `dist` 推到 **`gh-pages`** 分支。若未看到站点，检查 **Actions** 是否成功。

构建时会根据仓库名自动设置前端资源路径（`VITE_BASE_PATH`）：普通项目为 `/<仓库名>/`，用户站点为 `/`。

---

## 二、可视化维护简历（Decap CMS）

线上简历内容来自仓库根目录的 **`public/resume.json`**。你通过浏览器里的 **Decap CMS** 编辑并保存后，会向 GitHub **提交该文件的修改**；再次部署后，首页会读取最新 JSON。

### 1. 修改 `public/admin/config.yml`

将以下内容改成你的仓库：

```yaml
backend:
  name: github
  repo: 你的GitHub用户名/你的仓库名
  branch: main
```

保存、提交并推送。

### 2. 配置 GitHub OAuth（登录 Decap 用）

纯 GitHub Pages **没有** Netlify 自带的身份服务，要让 Decap 用 GitHub 账号登录并写仓库，需要 **OAuth 应用 + 代理服务**（官方说明见 [Decap：GitHub 后端](https://decapcms.org/docs/github-backend/)）。

简要步骤：

1. 在 GitHub：**Settings → Developer settings → OAuth Apps** 新建应用。  
   - **Homepage URL**：你的站点首页，例如 `https://<用户>.github.io/<仓库>/`  
   - **Authorization callback URL**：须与你部署的 **OAuth 代理** 文档一致（常见为代理服务提供的固定回调地址）。
2. 将 **Client ID**、**Client Secret** 配置到 OAuth 代理服务（见下方常见方案）。
3. 在 `public/admin/config.yml` 里配置 **`base_url`** 为你的代理根地址（无尾斜杠），例如：

   ```yaml
   base_url: https://你的oauth代理域名
   ```

4. 推送后，访问：`https://<用户>.github.io/<仓库>/admin/`（或你的自定义域名 + `/admin/`），用 **对该仓库有写权限的 GitHub 账号** 登录，编辑 **简历数据** 并发布。

常见 OAuth 代理方案（任选其一，按对应项目文档部署）：

- 社区维护的 **GitHub OAuth provider**（用于 Netlify CMS / Decap），可部署在 **Render、Railway、Cloudflare Workers** 等。
- 若将来改用 **Netlify** 托管同一仓库，可使用 Netlify Identity / Git Gateway 简化流程（与「仅 GitHub Pages」不同）。

本地开发时，可在项目根目录运行 **`npx decap-server`**（需安装 Node），并在 **`config.yml` 中临时** 增加 `local_backend: true`，以便在无 OAuth 时本地读写（**不要**把 `local_backend: true` 提交到用于线上管理的最终配置，除非你明确只在本地使用 CMS）。

### 3. 访问入口

- 前台简历：`/`（根路径）  
- 管理后台：`/admin/`（即 `public/admin/index.html`）

首页 Hero 区域有「**内容管理**」链接（指向 `/admin/`），便于你记忆入口。

---

## 三、数据说明

- **技能列表**在 CMS 中每条为 `{ "text": "..." }`；历史上若曾为纯字符串数组，前端会自动归一化，无需手动改旧数据。
- **教育 / 工作经历**通过列表 **新增、删除、排序**；每条经历下的 **要点板块**、**要点条目** 同样可增删。
- 上传的图片会进入 **`public/uploads`**（若未配置 OAuth，上传可能不可用；简历站可不使用图片）。

---

## 四、本地开发

```bash
npm install
npm run dev
```

浏览器打开终端里提示的本地地址；`resume.json` 从 **`/resume.json`** 加载（Vite 从 `public` 提供）。

```bash
npm run build
```

构建前若需模拟 GitHub 项目页路径，可：

```bash
# Windows PowerShell
$env:VITE_BASE_PATH="/你的仓库名/"; npm run build
```
