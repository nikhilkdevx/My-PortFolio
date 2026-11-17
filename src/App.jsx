
import { useCallback, useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import "./App.css";

function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && (
        <TerminalIntro onComplete={handleIntroComplete} />
      )}

      <main
        className={`portfolio-shell ${
          introComplete ? "is-visible" : "is-hidden"
        }`}
      >
        <div className="hero-content">
          <span className="hero-eyebrow">HELLO, WORLD.</span>

          <h1>
            I'm <span className="highlight-text">Nik.</span>
          </h1>

          <p className="hero-tagline">
            Ideas deserve to be built.
          </p>

          <p className="hero-description">
            Computer Science student at BITS Pilani,
            building full-stack applications and exploring
            the engineering behind them.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              Explore My Work
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
