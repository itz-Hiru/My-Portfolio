import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.component.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");

  const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/home" className="nav__logo">
          Hirumitha
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/home"
                className={
                  activeNav === "/home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="bx bxs-home nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                className={
                  activeNav === "/about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="bx bxs-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/skills"
                className={
                  activeNav === "/skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="bx bxs-file-blank nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className={
                  activeNav === "/services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="bx bxs-briefcase nav__icon"></i> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className={
                  activeNav === "/contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="bx bx-message-alt-detail nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i
            className="bx bx-x nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
