import "./About.css";

function About() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Science Engineering",
      college: "Smt. Kamala and Shri Venkappa M. Agadi College of Engineering and Technology",
      year: "2026",
      score: "9.04 CGPA",
      icon: "🎓",
    },
    {
      degree: "Pre-University Course",
      field: "PUC",
      college: "Kirloskar Ind PU College, Harihar",
      year: "2022",
      score: "84%",
      icon: "📚",
    },
    {
      degree: "SSLC",
      field: "Secondary Education",
      college: "Saint Mary's English Medium High School",
      year: "2020",
      score: "84.32%",
      icon: "🏫",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "C",
    "FastAPI",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "Data Science",
    "Git",
    "Frappe",
    "ERPNext",
  ];

  return (
    <section className="about-page">

      <div className="about-wrapper">

        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        <div className="about-inner">

          {/* PAGE HEADING */}

          <div className="about-heading">
            <span>✦ GET TO KNOW ME</span>
            <h1>ABOUT ME</h1>
            <p>A little introduction about the person behind the code.</p>
          </div>

          {/* INTRODUCTION */}

          <div className="about-intro">

            <div className="about-text">

              <div className="about-section-label">
                <span>01</span> WHO AM I?
              </div>

              <h2>
                Hello, I'm <span>Apoorva!</span> 👋
              </h2>

              <p>
                I'm an Information Science Engineering graduate with a
                passion for technology, web development, and building
                creative digital experiences.
              </p>

              <p>
                I enjoy exploring new technologies and transforming
                ideas into practical applications. My interests include
                frontend development, full-stack development, database
                management, and software development.
              </p>

              <p>
                I believe in continuous learning, creative
                problem-solving, and building applications that
                make a difference.
              </p>

              <div className="about-highlight">
                <span>✨</span>
                Always curious. Always learning. Always creating.
              </div>

            </div>

            {/* DEVELOPER ILLUSTRATION */}

            <div className="about-illustration">

              <div className="about-circle"></div>

              <div className="about-character">
                👩🏻‍💻
              </div>

              <div className="about-floating about-float-one">
                &lt; HTML /&gt;
              </div>

              <div className="about-floating about-float-two">
                ✨ Creative Mind
              </div>

              <div className="about-floating about-float-three">
                { } JavaScript
              </div>

              <span className="about-sparkle sparkle-one">✳</span>
              <span className="about-sparkle sparkle-two">✦</span>

            </div>

          </div>

          {/* EDUCATION */}

          <div className="about-education">

            <div className="about-section-title">
              <div>
                <span>02 / MY BACKGROUND</span>
                <h2>My Education <span>🎓</span></h2>
              </div>

              <p>My academic journey so far.</p>
            </div>

            <div className="education-grid">

              {education.map((item, index) => (
                <div className="education-card" key={index}>

                  <div className="education-card-top">
                    <span className="education-icon">
                      {item.icon}
                    </span>

                    <span className="education-year">
                      {item.year}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-field">
                    {item.field}
                  </p>

                  <p className="education-college">
                    {item.college}
                  </p>

                  <div className="education-score">
                    ✦ {item.score}
                  </div>

                </div>
              ))}

            </div>

          </div>

          

          <div className="about-footer">
            MADE WITH ♡ BY APOORVA
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;