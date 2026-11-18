
import { useCallback, useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";

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
      <Navbar/>
      <main
        className={`portfolio-shell ${
          introComplete ? "is-visible" : "is-hidden"
        }`}
      >
        <Hero/>
      </main>
    </>
  );
}

export default App;
