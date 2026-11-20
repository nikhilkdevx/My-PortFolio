
import "./About.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPlay,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/nikhilkdevx",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "", // Add your LinkedIn profile URL
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "", // Add your Instagram profile URL
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "", // Add mailto:your-email@example.com
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="about__eyebrow">
            BEHIND THE CODE
          </span>

          <h2 className="about__title">
            A little <span>about me.</span>
          </h2>
        </div>

        <div className="about__layout">
          {/* Left: Portrait video */}
          <div className="about__video-column">
            <div className="about__video-frame">
              {/*
                Future video:
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/about-poster.jpg"
                >
                  <source
                    src="/videos/about-me.mp4"
                    type="video/mp4"
                  />
                </video>
              */}

              <div className="about__video-placeholder">
                <div className="about__play-icon">
                  <FaPlay aria-hidden="true" />
                </div>

                <span className="about__video-label">
                  MY STORY
                </span>

                <p>
                  A personal introduction
                  <br />
                  Coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Right: Introduction and social links */}
          <div className="about__content">
            <div className="about__intro">
              <span className="about__intro-label">
                WHO I AM
              </span>

              <h3>
                Building with purpose.
                <br />
                <span>Growing through challenges.</span>
              </h3>

              <p>
                I'm Nik, a Computer Science undergraduate
                at BITS Pilani, passionate about building
                meaningful software and solving real-world
                problems through technology.
              </p>

              <p>
                I work with C++, JavaScript, React, Node.js,
                and databases, with a strong interest in
                full-stack development and software
                engineering.
              </p>

              <p>
                What drives me is the opportunity to create
                something useful, keep challenging myself,
                and build a career that gives me the freedom
                to explore new possibilities.
              </p>
            </div>

            <div className="about__connect">
              <div className="about__connect-heading">
                <span>LET'S CONNECT</span>
                <p>Find me online or get in touch.</p>
              </div>

              <div className="about__socials">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return social.url ? (
                    <a
                      key={social.name}
                      href={social.url}
                      className="about__social-link"
                      aria-label={social.name}
                      title={social.name}
                      target={
                        social.url.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        social.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Icon aria-hidden="true" />
                      <span>{social.name}</span>
                    </a>
                  ) : (
                    <div
                      key={social.name}
                      className="about__social-link about__social-link--disabled"
                      title={`${social.name} link coming soon`}
                    >
                      <Icon aria-hidden="true" />
                      <span>{social.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
