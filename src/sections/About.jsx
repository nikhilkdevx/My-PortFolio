
import "./About.css";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nikhilkdevx",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "", // Add your LinkedIn profile URL
    icon: "linkedin",
  },
  {
    name: "Email",
    href: "", // Add mailto:your-email@example.com
    icon: "mail",
  },
];

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.05 3.27 1.4.1-.73.4-1.23.72-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.41.35.77 1.03.77 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/>
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.5v5.28Z"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <header className="about__header">
          <span className="about__eyebrow">BEYOND THE CODE</span>
          <h2 className="about__title">
            A little about <span>me.</span>
          </h2>
        </header>

        <div className="about__layout">
          <div className="about__video-card">
            <div className="about__video-placeholder">
              <div className="about__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="m8 5 11 7-11 7V5Z" />
                </svg>
              </div>

              <p className="about__video-heading">
                The person behind the code
              </p>
              <p className="about__video-subtitle">
                A personal introduction is coming soon.
              </p>
            </div>
          </div>

          <div className="about__right">
            <article className="about__story-card">
              <span className="about__card-label">MY STORY</span>

              <h3>Curiosity. Courage. Growth.</h3>

              <p>
                I'm Nik, a Computer Science undergraduate at BITS Pilani,
                passionate about building meaningful software and solving
                real-world problems.
              </p>

              <p>
                I enjoy turning ideas into working applications, exploring
                how systems work, and continuously improving my
                problem-solving skills. I'm driven by curiosity, a
                willingness to take on challenges, and the ambition to
                grow as a software engineer.
              </p>
            </article>

            <div className="about__connect-card">
              <div className="about__connect-copy">
                <span className="about__card-label">LET'S CONNECT</span>
                <p>
                  Open to learning, collaboration, and meaningful
                  opportunities.
                </p>
              </div>

              <div className="about__socials">
                {socialLinks.map((social) =>
                  social.href ? (
                    <a
                      key={social.name}
                      href={social.href}
                      className="about__social-link"
                      aria-label={social.name}
                      title={social.name}
                      target={social.name === "Email" ? undefined : "_blank"}
                      rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
