import { Atom } from "react-loading-indicators"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="page">
      <div className="content">
        <div className="loader">
          <Atom
            color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
            size="large" speedPlus={-1}
          />
        </div>
        <h1 className="gradient-text">Coming soon</h1>

      </div>
      <SpeedInsights/>
      <Analytics />
    </div>
  )
}

export default App
