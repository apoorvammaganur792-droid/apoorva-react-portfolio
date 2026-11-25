import "./Skills.css";

function Skills() {

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "Python", "Java", "JavaScript"],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "React"],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["FastAPI", "Node.js", "Full Stack Development"],
    },
    {
      title: "Database Technologies",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "SQL"],
    },
    {
      title: "Other Technologies",
      icon: "🚀",
      skills: ["Data Science", "Data Visualization", "Microsoft Office", "Linux", "Windows"],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "Udemy",
      description: "JavaScript, Node.js, CSS and HTML",
      icon: "🌐",
      type: "Course Completion",
    },
    {
      title: "Practical SQL",
      organization: "Udemy",
      description: "Query and Manage Databases",
      icon: "🗄️",
      type: "Certification",
    },
    {
      title: "Data Science Internship",
      organization: "Tech Fortune Technologies",
      description: "Internship Completion Certificate",
      icon: "📊",
      type: "Internship",
    },
    {
      title: "Python for OOP",
      organization: "Udemy By Meta Brains",
      description: "The A-to-Z OOP Python Progamming Course",
      icon: "⚡",
      type: "Course Completion",
    },
    {
      title: "INFOTHON 5.0",
      organization: "VIDYAVARDHAKA COLLEGE OF ENGINEERING",
      description: "National Level Hackathon Participation",
      icon: "🏆",
      type: "Participation",
    },
    {
      title: "Employability Enhancement Program",
      organization: "Aspire for Her – Infosys Support",
      description: "Aptitude, Soft Skills and Technical Skills",
      icon: "🌟",
      type: "Certificate",
    },
  ];

  return (
    <section className="skills-page" id="skills">

      <div className="skills-wrapper">

        <div className="skills-inner">

          {/* HEADING */}

          <div className="skills-heading">
            <span>✦ MY TECH TOOLKIT</span>
            <h1>SKILLS & <span>CERTIFICATIONS</span></h1>
            <p>
              Technologies I work with and milestones from my learning journey.
            </p>
          </div>

          {/* TECHNICAL SKILLS */}

          <div className="technical-skills">

            <div className="skills-section-title">
              <div>
                <span>01 / WHAT I KNOW</span>
                <h2>Technical Skills 💻</h2>
              </div>

              <p>My development toolkit.</p>
            </div>

            <div className="skill-groups">

              {skillGroups.map((group, index) => (

                <div className="skill-group-card" key={index}>

                  <div className="skill-group-heading">
                    <span className="skill-group-icon">
                      {group.icon}
                    </span>

                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-group-items">

                    {group.skills.map((skill) => (
                      <span className="skill-badge" key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* CERTIFICATIONS */}

          <div className="certifications-section">

            <div className="skills-section-title">
              <div>
                <span>02 / MY ACHIEVEMENTS</span>
                <h2>Certifications 🏆</h2>
              </div>

              <p>Courses, internships and participation.</p>
            </div>

            <div className="certifications-grid">

              {certifications.map((cert, index) => (

                <div className="certification-card" key={index}>

                  <div className="cert-top">
                    <span className="cert-icon">
                      {cert.icon}
                    </span>

                    <span className="cert-number">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="cert-type">
                    {cert.type}
                  </span>

                  <h3>{cert.title}</h3>

                  <p className="cert-organization">
                    {cert.organization}
                  </p>

                  <p className="cert-description">
                    {cert.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* BOTTOM MESSAGE */}

          <div className="skills-message">
            <span>🌱</span>
            <div>
              <h3>Always Learning, Always Growing!</h3>
              <p>
                Every new skill is another opportunity to build
                something meaningful.
              </p>
            </div>
          </div>

          <div className="skills-footer">
            DESIGNED WITH ♡ BY APOORVA
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;