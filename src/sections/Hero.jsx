
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left: Developer illustration */}
        <div className="hero-visual">
          <div className="hero-avatar-glow">
             <img
                src="/images/developer-avatar.png"
                alt="3D illustration of a developer working on a laptop"
                className="developer-avatar"
              />
          </div>
        </div>

        {/* Right: Introduction */}
        <div className="hero-introduction">
          <div className="hero-greeting-wrap">
            <p className="hero-greeting">
              Hello, I'm <span>Nik</span>
            </p>

            <svg
              className="hero-greeting-arrow"
              viewBox="0 0 180 90"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M170 8 C125 5, 85 20, 48 65"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="2 6"
                fill="none"
              />

              <path
                d="M49 65 L51 48 M49 65 L66 59"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 6"
                fill="none"
              />
            </svg>
          </div>

          <p className="hero-preheading">
            A developer who
          </p>

          <h1 className="hero-title">
            Believes ideas deserve to be{" "}
            <span>built.</span>
          </h1>

          <p className="hero-description">
            Building full-stack applications and exploring
            the engineering behind them.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">
              Explore Projects
            </a>

            <a href="#about" className="hero-button secondary">
              About Me
            </a>
          </div>
        </div>

        {/* Introduction below the main hero */}
        <div className="hero-details">
          <h2>
            I'm a <span>Full-Stack Developer</span>
          </h2>

          <p className="hero-education">
            B.Sc. Computer Science student at
            <span> BITS Pilani.</span>
          </p>

          <p className="hero-bio">
            A computer science student building practical
            applications and exploring software engineering,
            system design and real-world technology.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;
