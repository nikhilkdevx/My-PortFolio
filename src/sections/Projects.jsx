
import { useEffect, useRef, useState } from "react";
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
    live: "https://nexameet-fden.onrender.com",
    featured: true,
    status: "completed",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio built with React, featuring interactive sections, project showcases, and a functional contact form.",
    technologies: ["React", "Vite", "CSS3", "EmailJS"],
    image: "/images/portfolio.png",
    imageAlt: "Nik personal developer portfolio website",
    github: "",
    live: "",
    featured: false,
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
    imageAlt: "Project Astra preview",
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
          <span className="project-label">
            FEATURED PROJECT
          </span>
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
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const updateCarousel = () => {
      const cards = carousel.querySelectorAll(".project-card");
      if (!cards.length) return;

      const firstCard = cards[0];
      const secondCard = cards[1];

      const cardStep = secondCard
        ? secondCard.offsetLeft - firstCard.offsetLeft
        : firstCard.offsetWidth;

      const index = cardStep
        ? Math.round(carousel.scrollLeft / cardStep)
        : 0;

      const count = window.innerWidth <= 600 ? 1 : 2;
      const maxIndex = Math.max(
        0,
        otherProjects.length - count
      );

      setVisibleCount(count);
      setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
    };

    updateCarousel();

    carousel.addEventListener("scroll", updateCarousel, {
      passive: true,
    });

    window.addEventListener("resize", updateCarousel);

    return () => {
      carousel.removeEventListener("scroll", updateCarousel);
      window.removeEventListener("resize", updateCarousel);
    };
  }, [otherProjects.length]);

  const maxIndex = Math.max(
    0,
    otherProjects.length - visibleCount
  );

  const scrollToProject = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.querySelectorAll(".project-card");
    const target = cards[index];

    if (!target) return;

    carousel.scrollTo({
      left: target.offsetLeft - cards[0].offsetLeft,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "instant"
        : "smooth",
    });
  };

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

          <div className="projects-carousel">
            <div className="projects-carousel-header">
              <span className="projects-carousel-label">
                MORE PROJECTS
              </span>

              <div className="projects-carousel-controls">
                <button
                  type="button"
                  className="projects-carousel-arrow"
                  onClick={() =>
                    scrollToProject(activeIndex - 1)
                  }
                  disabled={activeIndex === 0}
                  aria-label="Previous projects"
                >
                  ←
                </button>

                <button
                  type="button"
                  className="projects-carousel-arrow"
                  onClick={() =>
                    scrollToProject(activeIndex + 1)
                  }
                  disabled={activeIndex >= maxIndex}
                  aria-label="Next projects"
                >
                  →
                </button>
              </div>
            </div>

            <div
              className="projects-secondary"
              ref={carouselRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="More portfolio projects"
              tabIndex={0}
            >
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

            <div
              className="projects-carousel-indicators"
              aria-label="Project carousel position"
            >
              {Array.from(
                { length: maxIndex + 1 },
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`projects-carousel-dot ${
                      activeIndex === index
                        ? "projects-carousel-dot--active"
                        : ""
                    }`}
                    onClick={() => scrollToProject(index)}
                    aria-label={`Go to project group ${
                      index + 1
                    }`}
                    aria-current={
                      activeIndex === index ? "true" : undefined
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
