import "./Projects.css";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Memento",
      category: "Web Application",
      icon: "📝",
      color: "project-purple",
      description:
        "A project management and documentation application built using Frappe. It organizes project information, task updates, descriptions and activity logs in one place.",
      technologies: ["Frappe", "Python", "JavaScript", "ERPNext"],
      github: "https://github.com/apoorvammaganur792-droid/Memento",
      label: "PROJECT MANAGEMENT",
    },
    {
      number: "02",
      title: "Smart Expense Tracker",
      category: "Full Stack Development",
      icon: "💰",
      color: "project-green",
      description:
        "A full-stack expense management application featuring user authentication, CRUD operations, expense categorization, dashboard analytics and spending charts.",
      technologies: ["React", "FastAPI", "PostgreSQL"],
      github:
        "https://github.com/apoorvammaganur792-droid/smart-expense-tracker",
      label: "FINANCE APPLICATION",
    },
    {
      number: "03",
      title: "GameHub",
      category: "Web Development",
      icon: "🎮",
      color: "project-pink",
      description:
        "A responsive browser gaming website built with React and Vite, featuring Snake, Tetris, Dark Shooter, and Memory games. Designed with a modern gaming interface and support for desktop, tablet, and mobile devices.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "HTML5",
        "CSS3",
        "GitHub Pages"
      ],
      github: "https://apoorvammaganur792-droid.github.io/gamehub/",
      label: "BROWSER GAMING PLATFORM",
    },
    {
      number: "04",
      title: "Solar Powered Seed Sprayer",
      category: "IoT & Embedded Systems",
      icon: "🌱",
      color: "project-blue",
      description:
        "An eco-friendly automated seed sprayer using solar energy, Embedded C, NodeMCU, DHT11 sensor, L298 motor driver and IoT technology for efficient agricultural seeding.",
      technologies: [
        "Embedded C",
        "NodeMCU",
        "DHT11",
        "IoT",
      ],
      github: "",
      label: "AGRICULTURAL TECHNOLOGY",
    },
  ];

  return (
    <section className="projects-page" id="projects">

      <div className="projects-wrapper">

        <div className="projects-inner">

          {/* HEADING */}

          <div className="projects-heading">

            <span>✦ THINGS I'VE BUILT</span>

            <h1>MY PROJECTS</h1>

            <p>
              A collection of ideas, experiments and things
              I've brought to life.
            </p>

          </div>

          {/* PROJECT COUNT */}

          <div className="projects-subheading">

            <div>
              <span>01 / MY WORK</span>
              <h2>Featured Projects <span>✨</span></h2>
            </div>

            <div className="project-count">
              <strong>04</strong>
              <span>PROJECTS</span>
            </div>

          </div>

          {/* PROJECT GRID */}

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >

                {/* CARD TOP */}

                <div className="project-card-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                {/* PROJECT VISUAL */}

                <div className="project-visual">

                  <span className="project-visual-icon">
                    {project.icon}
                  </span>

                  <span className="project-visual-label">
                    {project.label}
                  </span>

                  <span className="project-decoration decoration-one">
                    ✳
                  </span>

                  <span className="project-decoration decoration-two">
                    ✦
                  </span>

                </div>

                {/* PROJECT DETAILS */}

                <div className="project-details">

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="project-technologies">

                    {project.technologies.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* BUTTON */}

                  <div className="project-actions">

                    {project.github ? (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                      >
                        GitHub ↗
                      </a>

                    ) : (

                      <span className="project-status">
                        ✦ Personal Project
                      </span>

                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* BOTTOM MESSAGE */}

          <div className="projects-bottom">

            <div>
              <span>💡</span>
              <div>
                <h3>Have an interesting idea?</h3>
                <p>Let's turn it into something amazing!</p>
              </div>
            </div>

            <a href="#contact">
              Let's Connect ↗
            </a>

          </div>

          <div className="projects-footer">
            DESIGNED WITH ♡ BY APOORVA
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;