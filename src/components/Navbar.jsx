
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="#home" className="navbar-logo">
          Nik<span>.</span>
        </a>

        {/* Navigation links */}
        <nav className="navbar-links">
          <a href="#home" className="nav-link active">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

          <a
            href="/resume.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span>↓</span>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
