
import { useEffect, useState } from "react";
import "./TerminalIntro.css";

function TerminalIntro({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1200);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 1500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <section
      className={`terminal-intro ${
        isExiting ? "is-exiting" : ""
      }`}
      aria-label="Portfolio introduction"
    >
      <div className="intro-top-label">
        <span>INDEPENDENT DEVELOPER</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>

          <span className="terminal-title">
            nik.dev / initialization
          </span>

          <span className="terminal-status">
          </span>
        </div>

        <div className="terminal-body">
          <div className="terminal-brand">
            NIK<span>.DEV</span>
          </div>

          <p className="terminal-tagline">
            Ideas deserve to be built.
          </p>

          <div className="terminal-divider"></div>

          <p className="terminal-section-label">
            INITIALIZATION PROCESS
          </p>

          <div className="terminal-command">
            $ initializing portfolio...
            <span className="terminal-cursor"></span>
          </div>

          <div className="terminal-output">
            <p>
              <span></span> Loading interface
            </p>

            <p>
              <span></span> Preparing experience
            </p>

            <p>
              <span></span> Welcome, Nik.
            </p>
          </div>
        </div>

        <div className="terminal-progress">
          <div className="terminal-progress-fill"></div>
        </div>
      </div>

      <div className="intro-bottom-label">
        <span>DESIGNED & BUILT BY NIK</span>
        <span>WELCOME TO MY DIGITAL SPACE</span>
      </div>
    </section>
  );
}

export default TerminalIntro;
