import { useEffect } from "react";
import { Atom } from "react-loading-indicators";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    // Inject Speed Insights script manually
    const script = document.createElement("script");
    script.src = "/_vercel/insights/script.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="page">
      <div className="content">
        <div className="loader">
          <Atom
            color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
            size="large"
            speedPlus={-1}
          />
        </div>
        <h1 className="gradient-text">Coming soon</h1>
      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
