
import "./Education.css";

const achievements = [
  {
    number: "01",
    title: "Top 10 — KRITI 2026",
    subtitle: "BITS Pilani",
    description:
      "Achieved a Top 10 finish as part of a team in the KRITI hackathon.",
    certificate: "/certificates/kriti-2026.pdf",
  },
  {
    number: "02",
    title: "Smart India Hackathon 2025",
    subtitle: "Internal Selection · BITS Pilani",
    description:
      "Cleared the college-level internal selection round for SIH.",
  },
];

function Education() {
  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <header className="education__header">
          <span className="education__eyebrow">
            MY JOURNEY
          </span>

          <h2
            className="education__title"
            id="education-title"
          >
            Education <span>& Achievements.</span>
          </h2>

          <p className="education__intro">
            Building a strong foundation through learning,
            challenges, and real-world experiences.
          </p>
        </header>

        <div className="education__layout">
          <div className="education__column">
            <h3 className="education__column-title">
              <span className="education__column-dot" />
              Education
            </h3>

            <article className="education__card education__card--degree">
              <div className="education__card-top">
                <span className="education__label">
                  UNDERGRADUATE
                </span>
                <span className="education__period">
                  2025 — Present
                </span>
              </div>

              <h4 className="education__card-title">
                B.Sc. Computer Science
              </h4>

              <p className="education__institution">
                BITS Pilani · Online Programme
              </p>

              <p className="education__card-description">
                Developing my foundation in computer
                science, programming, and software
                development.
              </p>

              <div className="education__degree-footer">
                <div>
                  <span className="education__stat-value">
                    9.2<span>/10</span>
                  </span>
                  <span className="education__stat-label">
                    Current CGPA
                  </span>
                </div>

                <span className="education__status">
                  Currently Pursuing
                </span>
              </div>
            </article>
          </div>

          <div className="education__column">
            <h3 className="education__column-title">
              <span className="education__column-dot" />
              Achievements
            </h3>

            <div className="education__achievements">
              {achievements.map((achievement) => (
                <article
                  className="education__card education__achievement"
                  key={achievement.number}
                >
                  <span
                    className="education__achievement-number"
                    aria-hidden="true"
                  >
                    {achievement.number}
                  </span>

                  <div className="education__achievement-content">
                    <h4 className="education__card-title">
                      {achievement.title}
                    </h4>

                    <p className="education__institution">
                      {achievement.subtitle}
                    </p>

                    <p className="education__card-description">
                      {achievement.description}
                    </p>
                    {achievement.certificate && (
                        <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education__certificate-link"
                        >
                            View Certificate ↗
                        </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
