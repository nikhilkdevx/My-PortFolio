
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Nik<span>.</span>
        </a>

        {/* Hamburger button */}
        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <nav
          id="primary-navigation"
          className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
        >
          <a href="#home" className="nav-link active" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" className="nav-link" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="/resume.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume <span>↓</span>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
