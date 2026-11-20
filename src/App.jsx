
import { useCallback, useState } from "react";
import TerminalIntro from "./components/TerminalIntro";
import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import "devicon/devicon.min.css";
import TechStack from "./sections/TechStack";
import About from "./sections/About";

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
        <Projects/>
        <TechStack/>
        <About/>
      </main>
    </>
  );
}

export default App;

