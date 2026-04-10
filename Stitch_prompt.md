# Stitch Prompt — Personal Resume Website (Prototype / Wireframe)

Use this document as the **single source of truth** to generate a **high-fidelity UI prototype** (desktop + mobile) for a **personal resume website**. Output should read as a **luxury, editorial one-pager** (or clearly separated sections with anchor navigation). **Do not** include any **photographs, portraits, avatars, headshots, team photos, stock people, or illustrative human figures**. Use **pure typography, geometry, ornamental frames, dividers, and abstract Art Deco motifs** instead.

---

## Role & Behavior (for the design agent)

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to define a prototype that can later be implemented in a codebase in a way that is visually consistent, maintainable, and idiomatic to the stack (e.g. React + CSS modules or Tailwind).

Before proposing visuals, build a clear mental model:

- Assume a modern web stack (e.g. React + Vite); prototypes should map cleanly to components (layout shell, section blocks, cards, lists, navigation).
- Centralize **design tokens** (colors, spacing, typography, radii, shadows).
- Prefer **reusable, composable** patterns over one-off styles.
- Preserve **accessibility**: contrast, focus states, touch targets (min ~44px), semantic section structure in annotations if shown.

Scope for this task: **prototype only** — no backend, no real forms required beyond visual placeholders (optional “Contact” can be static mailto/tel links).

---

## Resume Content & Information Architecture (English; match this structure)

**Candidate**

- **Name:** Zhou Xuefeng  
- **Profile line:** Male · 34 · **12 years** of professional experience  
- **Contact:** Phone `15919880185` · Email `1219960752@qq.com`  

**Education**

- **Wuhan University of Technology** (full-time, Project 211) — **Bachelor, Logistics Engineering** — **2009-09 — 2013-06**

**Professional Experience** (reverse chronological; each role must be a distinct block)

1. **Poly Property Services Co., Ltd.** — **Operations Management (national asset-related business)** — **2023-06 — Present**  
   **Summary:** Leads national asset-related business operations (e.g. secondary and new-home segments). In ~2 years, grew the business from **0 to ~RMB 10B GMV**, covering **30+ cities** and **400+** sales staff.  
   **Subsections / themes to visualize as grouped lists (use concise labels in the UI):**  
   - **Business model:** Research on traditional agency “customer-first” patterns; lessons from past group failures; differentiated **“property-first / community owner resource”** model.  
   - **Targets:** Shift from single historical baselines to **volume-based planning**; model stable / dynamic / interference factors; **process metrics** vs outcome-only pressure — **7** key levers (resources → collaboration → listings → customers → visits → conversion → closing) with funnel models.  
   - **Planning & operations:** **PDCA** loop; project diagnostics; weekly review linking remediation, process KPIs, and revenue trend; **matrix enablement** (team building, capability, management, compliance) — **100+** training sessions across open courses, themed training, and special topics.  
   - **Governance:** **20+** mechanisms/policies with HR, finance, compliance; rollout + execution control + result-based application across HQ → regions → projects.

2. **Kaisa Property Group** — **Community value-added business management** — **2021-06 — 2023-06**  
   **Summary:** National asset-related business operations; **two core cities** returned to profit within **3 months**; **~100%** revenue growth over **2 years**; also piloted **community operations / innovation incubation**.  
   **Themes:**  
   - **Turnaround (3 months):** Data + frontline research; (1) streamline tiers, close loss-making stores, tighten costs/discounts; (2) tiered commission to reward top performers, reuse internal resources, optimize cost structure.  
   - **Growth (2 years):** Focus resources on strong projects (vs scattered approach); customized inventory/asset solutions for developers; **residential tail, office, apartments** agency opportunities; incremental business from **0**.  
   - **Control:** Fee governance (approval, ROI — **+30%** ROI, **+20%** discount discipline); incentive alignment to profit.

3. **CR Mixc Lifestyle Services Ltd.** — **Project management (national digital platform)** — **2018-01 — 2021-05**  
   **Summary:** Demand planning and delivery for the group digital platform; **two** products from planning to launch; **highest** customer satisfaction in the department for the year.  
   **Themes:**  
   - **Product & delivery:** Competitive research; scenario mapping; roadmap and approvals; vendor dev lifecycle (prototype → build → test); change and staffing risk management; phased rollout and standards; iteration.  
   - **Operations & data:** Operating norms for granular management, data quality, customer profiles/resources, compliance; analytics on performance, people, resources, processes — governance and standards; **+30%+** improvement on key operating metrics with business teams.

4. **Cainiao Station — Shenzhen service partner** — **Business development** — **2014-04 — 2018-01**  
   **Summary:** Merchant expansion and local lifestyle operations; **#1** national expansion performance in a month; community **100%** first-order rate, **50%+** monthly repurchase.  
   **Themes:**  
   - **Expansion:** From individual top performer to **7-person** ground team; territories, scripts, coaching, daily reviews; **20%** referrals from existing clients.  
   - **Community ops:** Parcel pickup traffic → dry cleaning, group buying, etc.; helped merchants build/operate communities.

**Skills & Tools**

- **CET-6 English** (conversational spoken English)  
- **Data analysis** tools  
- **Large-scale PPT / analytical reports**

---

## Prototype Requirements (layout & UX)

1. **Single scrolling page** with optional **sticky header** and **anchor nav** (e.g. Overview, Experience, Education, Skills, Contact).  
2. **No images of people.** If a “hero” is needed, use **abstract geometry**, **sunburst**, **stepped frames**, **diamond motifs**, and **ornamental lines** only.  
3. **Clear typographic hierarchy:** name as display headline; role timeline with dates right-aligned or on a vertical spine; nested bullets readable at desktop and mobile.  
4. **Optional:** a slim **“At a glance”** strip with 3–4 metrics (e.g. years of experience, GMV milestone, cities coverage, training sessions) — use **Roman numerals** for step-style micro-labels if it fits the style.  
5. **Responsive:** comfortable line length; cards/stack on mobile; no horizontal scroll.  
6. **Annotations:** if the tool supports it, note **focus rings**, **aria-hidden** on purely decorative corners, and **mailto:/tel:** for contact.

---

## Visual Direction — Art Deco (“Great Gatsby” / Skyline Luxury)

**Personality:** Opulent, geometric, symmetrical, theatrical — **not** generic SaaS. **Maximalist restraint:** sharp angles, repetition, strong contrast, upward vertical rhythm.

### Tokens (digital)

- **Background:** `#0A0A0A` (obsidian)  
- **Foreground / body text:** `#F2F0E4` (champagne cream) — primary long-form reading  
- **Surface / cards:** `#141414`  
- **Primary accent (gold):** `#D4AF37` — headings accents, borders, key lines  
- **Secondary accent:** `#1E3D59` (midnight blue) — subtle fills / inactive accents  
- **Muted:** `#888888` — secondary text  
- **Borders:** celebrate gold lines — often **1px**, sometimes **double-frame** treatments; **radius 0–2px** (sharp architecture)

### Typography

- **Display / headings:** *Marcellus* or *Italiana* (Google Fonts) — uppercase for hero/section titles where appropriate.  
- **Body:** *Josefin Sans* — geometric, readable.  
- **Tracking:** generous on display (`tracking-widest` / ~0.2em for all-caps display lines).

### Signature motifs (must appear somewhere, non-photographic)

1. **Diagonal crosshatch** background (very low opacity gold lines, ~3–5%).  
2. **Rotated diamond frames** for icons or small badges — outer `rotate-45`, inner content counter-rotated (if icons are abstract glyphs only).  
3. **Roman numerals** for ordered highlights (I, II, III…) where numbering adds elegance.  
4. **Stepped / L-bracket corners** on cards.  
5. **Sunburst** radial gradients (gold at low opacity) behind hero focal area.  
6. **Section dividers:** short gold lines flanking headings; optional vertical gold hairlines between columns on wide layouts.  
7. **Glow, not mushy drop shadow:** e.g. `0 0 15px rgba(212,175,55,0.2)` on key interactive elements.

### Components (prototype-level)

- **Buttons:** sharp, min height ~48px, all-caps, wide tracking; outline gold / solid gold variants; hover = stronger glow + color flip.  
- **Cards:** charcoal panels, gold border (opacity ramps on hover), corner brackets, optional stepped clip feel.  
- **Inputs (if shown as decorative):** underline-only gold border; not required for v1 resume site.

### Motion (subtle)

- Mechanical, not bouncy: 300–500ms, ease-out / ease-in-out.  
- Cards: slight lift + border intensify on hover.  
- Optional staggered section reveal on load (opacity + translate).

### Accessibility

- Ensure **champagne cream** on black for body copy; use gold more for **accents** than long paragraphs.  
- Visible **focus** states (gold ring / offset on dark).  
- Decorative geometry: mark as decorative in notes (`aria-hidden`).

---

## Deliverables

Produce **desktop + mobile** prototype frames showing:

1. **Hero** — name, profile line, abstract Art Deco backdrop (no photo).  
2. **Experience** — four roles with summarized bullets as structured lists.  
3. **Education** — single compact block.  
4. **Skills** — compact list or pill row (still geometric / sharp).  
5. **Contact** — email + phone as text links, styled as elegant lines (no QR codes unless abstract pattern only).

**Do not** add stock photography, avatars, maps with photos, or illustrated characters. **Do** lean into typography, metal-gold accents, geometry, and editorial spacing.

---

## Implementation note (for later coding pass)

When this prototype is handed to engineering, align tokens in a single theme file; build **Layout**, **Section**, **Timeline/RoleCard**, **SkillList**, and **ContactBar** as reusable primitives; keep content in structured data (JSON or MD) separate from presentation.
