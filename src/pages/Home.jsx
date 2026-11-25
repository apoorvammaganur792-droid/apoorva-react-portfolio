import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">

      <div className="home-wrapper">

        {/* Decorative background */}
        <div className="home-glow glow-one"></div>
        <div className="home-glow glow-two"></div>

        {/* Main content */}
        <div className="home-inner">

          {/* LEFT SIDE */}
          <div className="home-content">

            <div className="home-badge">
              <span className="badge-star">✦</span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="home-greeting">
              HEY THERE! I'M
            </p>

            <h1>
              Apoorva M 
              <br />
              <span className="gradient-text">Maganur.</span>
            </h1>

            <div className="home-role">
              <span className="role-line"></span>
              SOFTWARE DEVELOPER
              <span className="role-sparkle">✳</span>
            </div>

            <p className="home-description">
              I love turning creative ideas into beautiful digital
              experiences. I build modern, interactive and user-friendly
              applications with a little bit of creativity and a lot of
              curiosity.
            </p>

            {/* Buttons */}
            <div className="home-buttons">

              <a href="#projects" className="home-primary-btn">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="home-secondary-btn">
                Let's Talk <span>♡</span>
              </a>

            </div>

            {/* Social links */}
            <div className="home-social">

              <span className="social-label">LET'S CONNECT</span>

              <a
                href="https://github.com/apoorvammaganur792-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="https://github.com/apoorvammaganur792-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github-btn"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="home-visual">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            {/* Decorative stars */}
            <span className="deco-star star-one">✳</span>
            <span className="deco-star star-two">✦</span>
            <span className="deco-star star-three">✧</span>

            {/* Main card */}
            <div className="developer-card">

              <div className="card-top">
                <span className="card-dot"></span>
                <span>MY CREATIVE SPACE</span>
                <span className="card-menu">•••</span>
              </div>

              <div className="developer-avatar">
                👩🏻‍💻
              </div>

              <h2>
                HELLO,
                <br />
                WORLD!
              </h2>

              <p className="card-subtitle">
                I'm Apoorva,
                <br />
                a developer who loves
                <br />
                creating cool things.
              </p>

              <div className="card-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>REACT</span>
                <span>JS</span>
              </div>

              <div className="card-bottom">
                <span>✦</span>
                <span>DESIGN. BUILD. CREATE.</span>
              </div>

            </div>

            {/* Floating tags */}
            <div className="floating-tag tag-code">
              &lt; Code /&gt;
            </div>

            <div className="floating-tag tag-creative">
              ✨ Stay Creative!
            </div>

            <div className="floating-tag tag-love">
              Made with ♡
            </div>

          </div>

        </div>

        {/* Bottom section */}
        <div className="home-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
          <span className="home-bottom-right">
            DESIGNED & BUILT BY APOORVA
          </span>
        </div>

      </div>

    </section>
  );
}

export default Home;