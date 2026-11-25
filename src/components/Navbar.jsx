import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">A</div>

          <div className="logo-text">
            <h2>Apoorva M Maganur<span>.</span></h2>
            <p>CREATIVE DEVELOPER</p>
          </div>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "show-menu" : ""}`}>

        {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Resume",
            "Contact"
        ].map((item) => (
            <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link"
            onClick={closeMenu}
            >
            {item}
            </a>
        ))}

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;