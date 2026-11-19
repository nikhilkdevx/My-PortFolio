
import "./Projects.css";

const projects = [
  {
    id: "nexameet",
    title: "NexaMeet",
    description:
      "A real-time one-to-one video calling application built with React, Express, and Socket.IO.",
    technologies: ["React", "Express.js", "Socket.IO"],
    image: "/images/nexameet.png",
    imageAlt: "NexaMeet video calling application",
    github: "https://github.com/nikhilkdevx/NexaMeet",
    live: "",
    featured: true,
    status: "completed",
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    description:
      "A full-stack accommodation listing platform with authentication, search, and category filtering.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
    image: "/images/wanderlust.png",
    imageAlt: "Wanderlust accommodation listing platform",
    github: "https://github.com/nikhilkdevx/WanderLust",
    live: "https://wanderlust-97aa.onrender.com/listings",
    featured: false,
    status: "completed",
  },
  {
    id: "astra",
    title: "Project Astra",
    description:
      "An upcoming AI-powered conversational assistant.",
    technologies: [],
    image: "/images/astra.png",
    imageAlt: "",
    github: "",
    live: "",
    featured: false,
    status: "coming-soon",
  },
];

function ProjectCard({ project }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      className={`project-card ${
        project.featured ? "project-card--featured" : ""
      }`}
    >
      <div className="project-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span className="project-placeholder-icon">✦</span>
            <span>PROJECT ASTRA</span>
          </div>
        )}
      </div>

      <div className="project-content">
        {project.featured && (
          <span className="project-label">FEATURED PROJECT</span>
        )}

        <h3 className="project-name">{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span className="project-tech" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        {isComingSoon ? (
          <span className="project-coming-soon">
            <span className="project-status-dot" />
            Coming Soon
          </span>
        ) : (
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="projects-heading">
            <p className="projects-eyebrow">
              SELECTED WORK
            </p>

            <h2 className="projects-title">
              Things I've <span>built.</span>
            </h2>
          </div>

        </div>

        <div className="projects-layout">
          {featuredProject && (
            <ProjectCard project={featuredProject} />
          )}

          <div className="projects-secondary">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
