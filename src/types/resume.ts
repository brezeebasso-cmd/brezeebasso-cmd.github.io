/** 每条要点（CMS 与归一化后均为该结构） */
export type BulletLine = {
  text: string
}

export type HighlightBlock = {
  title: string
  items: BulletLine[]
}

export type EducationEntry = {
  id: string
  school: string
  degree: string
  period: string
  note?: string
}

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  period: string
  summary: string
  highlights: HighlightBlock[]
}

export type ResumeData = {
  meta: {
    siteTitle: string
  }
  basic: {
    name: string
    tagline: string
    phone: string
    email: string
  }
  sectionTitles: {
    education: string
    experience: string
    skills: string
    contact: string
  }
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
}

export function isResumeData(x: unknown): x is ResumeData {
  if (!x || typeof x !== 'object') return false
  const o = x as Record<string, unknown>
  return (
    typeof o.meta === 'object' &&
    typeof o.basic === 'object' &&
    Array.isArray(o.education) &&
    Array.isArray(o.experience) &&
    Array.isArray(o.skills)
  )
}

function clone<T>(raw: unknown): T {
  return JSON.parse(JSON.stringify(raw)) as T
}

/** 兼容旧数据（items 为 string[]）与 CMS 写入的混合格式 */
export function normalizeResumeData(raw: unknown): ResumeData {
  const data = clone<Record<string, unknown>>(raw)

  if (Array.isArray(data.skills)) {
    data.skills = data.skills.map((s) => {
      if (typeof s === 'string') return s
      if (s && typeof s === 'object' && 'text' in s) {
        return String((s as { text: unknown }).text)
      }
      return String(s)
    })
  }

  const exp = data.experience
  if (Array.isArray(exp)) {
    for (const job of exp) {
      if (!job || typeof job !== 'object') continue
      const j = job as Record<string, unknown>
      const hl = j.highlights
      if (!Array.isArray(hl)) continue
      j.highlights = hl.map((block) => {
        if (!block || typeof block !== 'object') return block
        const b = block as Record<string, unknown>
        const items = b.items
        if (!Array.isArray(items)) return block
        const next: BulletLine[] = items.map((it) => {
          if (typeof it === 'string') return { text: it }
          if (it && typeof it === 'object' && 'text' in it) {
            return { text: String((it as { text: unknown }).text) }
          }
          return { text: String(it) }
        })
        return { ...b, items: next }
      })
    }
  }

  return data as unknown as ResumeData
}
