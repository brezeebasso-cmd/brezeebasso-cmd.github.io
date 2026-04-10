import { useEffect } from 'react'
import type { ResumeData } from '../types/resume'

type Props = {
  data: ResumeData
}

const roman = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

function romanOf(i: number): string {
  return roman[i] ?? String(i)
}

export function ResumePage({ data }: Props) {
  useEffect(() => {
    document.title = data.meta.siteTitle
  }, [data.meta.siteTitle])

  const base = import.meta.env.BASE_URL
  const adminHref = `${base}admin/index.html`

  return (
    <div className="resume">
      <div className="resume-bg" aria-hidden="true" />

      <header className="resume-hero">
        <div className="resume-sunburst" aria-hidden="true" />
        <p className="resume-hero-eyebrow">CURRICULUM VITAE</p>
        <h1 className="resume-hero-name">{data.basic.name}</h1>
        <p className="resume-hero-tagline">{data.basic.tagline}</p>
        <div className="resume-hero-divider" aria-hidden="true">
          <span className="resume-line" />
          <span className="resume-diamond" aria-hidden="true" />
          <span className="resume-line" />
        </div>
        <p className="resume-admin-hint">
          <a href={adminHref} className="resume-admin-link">
            内容管理
          </a>
        </p>
      </header>

      <main className="resume-main">
        <section className="resume-section" aria-labelledby="sec-edu">
          <div className="resume-section-head">
            <span className="resume-section-roman" aria-hidden="true">
              {romanOf(1)}
            </span>
            <h2 id="sec-edu" className="resume-section-title">
              {data.sectionTitles.education}
            </h2>
            <div className="resume-section-lines" aria-hidden="true" />
          </div>
          <div className="resume-grid">
            {data.education.map((e) => (
              <article key={e.id} className="resume-card">
                <div className="resume-card-corner resume-card-corner--tl" aria-hidden="true" />
                <div className="resume-card-corner resume-card-corner--br" aria-hidden="true" />
                <header className="resume-card-head">
                  <h3 className="resume-card-title">{e.school}</h3>
                  <p className="resume-card-meta">{e.period}</p>
                </header>
                <p className="resume-card-body">{e.degree}</p>
                {e.note ? <p className="resume-card-note">{e.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="sec-exp">
          <div className="resume-section-head">
            <span className="resume-section-roman" aria-hidden="true">
              {romanOf(2)}
            </span>
            <h2 id="sec-exp" className="resume-section-title">
              {data.sectionTitles.experience}
            </h2>
            <div className="resume-section-lines" aria-hidden="true" />
          </div>
          <div className="resume-stack">
            {data.experience.map((job) => (
              <article key={job.id} className="resume-card resume-card--wide">
                <div className="resume-card-corner resume-card-corner--tl" aria-hidden="true" />
                <div className="resume-card-corner resume-card-corner--br" aria-hidden="true" />
                <header className="resume-card-head resume-card-head--row">
                  <div>
                    <h3 className="resume-card-title">{job.company}</h3>
                    <p className="resume-card-role">{job.role}</p>
                  </div>
                  <p className="resume-card-meta resume-card-meta--right">{job.period}</p>
                </header>
                <p className="resume-summary">{job.summary}</p>
                <div className="resume-highlights">
                  {job.highlights.map((h) => (
                    <div key={h.title} className="resume-highlight">
                      <h4 className="resume-highlight-title">{h.title}</h4>
                      <ul className="resume-list">
                        {h.items.map((line, idx) => (
                          <li key={`${h.title}-${idx}`}>{line.text}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="sec-skills">
          <div className="resume-section-head">
            <span className="resume-section-roman" aria-hidden="true">
              {romanOf(3)}
            </span>
            <h2 id="sec-skills" className="resume-section-title">
              {data.sectionTitles.skills}
            </h2>
            <div className="resume-section-lines" aria-hidden="true" />
          </div>
          <ul className="resume-skills">
            {data.skills.map((s, idx) => (
              <li key={`${idx}-${s}`} className="resume-skill">
                <span className="resume-skill-mark" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="resume-section resume-section--contact" aria-labelledby="sec-contact">
          <div className="resume-section-head">
            <span className="resume-section-roman" aria-hidden="true">
              {romanOf(4)}
            </span>
            <h2 id="sec-contact" className="resume-section-title">
              {data.sectionTitles.contact}
            </h2>
            <div className="resume-section-lines" aria-hidden="true" />
          </div>
          <div className="resume-contact">
            <a className="resume-contact-link" href={`tel:${data.basic.phone}`}>
              {data.basic.phone}
            </a>
            <span className="resume-contact-sep" aria-hidden="true">
              |
            </span>
            <a className="resume-contact-link" href={`mailto:${data.basic.email}`}>
              {data.basic.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="resume-footer">
        <p>© {new Date().getFullYear()} {data.basic.name}</p>
      </footer>
    </div>
  )
}
