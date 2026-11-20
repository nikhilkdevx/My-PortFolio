
import { useState } from "react";
import "./TechStack.css";

import {
  SiEjs,
  SiExpress,
  SiMongoose,
  SiCloudinary,
  SiRender,
} from "react-icons/si";

const techCategories = [
  {
    title: "Languages & Frontend",
    technologies: [
      { name: "C++", icon: "cplusplus", color: "#649AD2" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#38BDF8" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "EJS", icon: "ejs", color: "#A6B46C" },
    ],
  },
  {
    title: "Backend & Databases",
    technologies: [
      { name: "Node.js", icon: "nodejs", color: "#83CD29" },
      { name: "Express.js", icon: "express", color: "#F7F4FC" },
      { name: "Socket.IO", icon: "socketio", color: "#C27AFF" },
      { name: "Passport.js", icon: "passport", color: "#34D399" },
      { name: "MongoDB", icon: "mongodb", color: "#4DB33D" },
      { name: "Mongoose", icon: "mongoose", color: "#B84D4D" },
      { name: "SQL", icon: "azuresqldatabase", color: "#67A9E3" },
    ],
  },
  {
    title: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#F7F4FC" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Cloudinary", icon: "cloudinary", color: "#5B9BFF" },
      { name: "Render", icon: "render", color: "#F7F4FC" },
      { name: "VS Code", icon: "vscode", color: "#23A9F2" },
    ],
  },
];

const customIcons = {
  ejs: SiEjs,
  express: SiExpress,
  mongoose: SiMongoose,
  cloudinary: SiCloudinary,
  render: SiRender,
};

function TechCard({ technology }) {
  const CustomIcon = customIcons[technology.icon];

  return (
    <div
      className="tech-card"
      style={{ "--tech-color": technology.color }}
    >
      {CustomIcon ? (
        <CustomIcon
          className="tech-card__icon"
          aria-hidden="true"
        />
      ) : (
        <i
          className={`devicon-${technology.icon}-plain tech-card__icon`}
          aria-hidden="true"
        />
      )}

      <span className="tech-card__name">
        {technology.name}
      </span>
    </div>
  );
}

function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  const selectedCategory = techCategories[activeCategory];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="container">
        <div className="tech-stack__header">
          <span className="tech-stack__eyebrow">
            MY TOOLKIT
          </span>

          <h2 className="tech-stack__title">
            Technologies I <span>work with.</span>
          </h2>

          <p className="tech-stack__description">
            The languages, frameworks, and tools behind my projects.
          </p>
        </div>

        <div className="tech-stack__tabs" role="group" aria-label="Technology categories">
          {techCategories.map((category, index) => (
            <button
              key={category.title}
              type="button"
              className={`tech-stack__tab ${
                activeCategory === index
                  ? "tech-stack__tab--active"
                  : ""
              }`}
              aria-pressed={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="tech-stack__content">
          <div className="tech-stack__category-heading">
            <h3>{selectedCategory.title}</h3>
            <span className="tech-stack__heading-line" />
          </div>

          <div className="tech-stack__grid">
            {selectedCategory.technologies.map((technology) => (
              <TechCard
                key={technology.name}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
