import { useEffect, useState } from "react";

function TerminalIntro({onComplete}){
    const [isVisible,setIsVisible] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(false);
            onComplete?.();
        },1100);
        return () => clearTimeout(timer);
    },[onComplete]);
    if(!isVisible){
        return null;
    }
    return (
    <div className="terminal-intro">
        <div className="terminal-window">
            <div className="terminal-header">
            <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="terminal-label">nik.dev — terminal</span>
            </div>

            <div className="terminal-content">
            <h1>NIK.DEV</h1>

            <p className="terminal-welcome">
                Welcome to my digital space.
            </p>

            <div className="terminal-lines">
                <p>$ initializing portfolio...</p>
                <p>→ Loading interface</p>
                <p>→ Preparing experience</p>
                <p>→ Welcome, Nik.</p>
            </div>

            <div className="terminal-cursor">
                <span>$</span>
                <span className="cursor"></span>
            </div>
            </div>
      </div>
    </div>
    );
}

export default TerminalIntro;