import './App.css'
import { ResumePage } from './components/ResumePage'
import { useResume } from './hooks/useResume'

function App() {
  const state = useResume()

  if (state.status === 'loading') {
    return (
      <div className="app app--loading">
        <p className="resume-loading">加载中…</p>
      </div>
    )
  }

  return (
    <div className="app">
      {state.status === 'error' ? (
        <div className="resume-banner" role="status">
          {state.message}
        </div>
      ) : null}
      <ResumePage data={state.data} />
    </div>
  )
}

export default App
