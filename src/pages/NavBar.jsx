import React, { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  useEffect(() => {
    let sections = document.getElementsByClassName("sections");
    let navLi = document.querySelectorAll("#navbar-links-section p");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  return (
    <div id="NavBar">
      <div id="navbar-name-section">
        <p id="navbar-name">Ujjwal Pathak</p>
      </div>
      {/* <div id="navbar-links-section">
        <p>
          <a href="#hero" id="nav-bar-links" className="hero active">
            About
          </a>
        </p>
        <p>
          <a href="#projects" id="nav-bar-links" className="projects">
            Projects
          </a>
        </p>
        <p>
          <a href="#skills" id="nav-bar-links" className="skills">
            Skills
          </a>
        </p>
        <p>
          <a href="#contact" id="nav-bar-links" className="contact">
            Contact
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default NavBar;
