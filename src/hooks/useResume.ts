import { useEffect, useState } from 'react'
import type { ResumeData } from '../types/resume'
import { isResumeData, normalizeResumeData } from '../types/resume'
import fallback from '../data/resume.fallback.json'

type State =
  | { status: 'loading' }
  | { status: 'ready'; data: ResumeData }
  | { status: 'error'; data: ResumeData; message: string }

function dataFromFallback(): ResumeData {
  const data = normalizeResumeData(fallback as unknown)
  if (!isResumeData(data)) {
    throw new Error('Invalid fallback resume data')
  }
  return data
}

export function useResume(): State {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}resume.json`
    let cancelled = false

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as unknown
      })
      .then((raw) => {
        if (cancelled) return
        const data = normalizeResumeData(raw)
        if (!isResumeData(data)) throw new Error('Invalid shape')
        setState({ status: 'ready', data })
      })
      .catch(() => {
        if (cancelled) return
        try {
          const data = dataFromFallback()
          setState({
            status: 'error',
            data,
            message: '无法加载线上简历数据，已显示内置备份。',
          })
        } catch {
          setState({ status: 'loading' })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
