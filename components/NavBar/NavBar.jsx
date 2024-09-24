import React from "react";
import { Bar } from "./styleNabBar";
import glassesicon from "../../public/glassesicon.svg";

function NavBar() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Bar>
      <div style={{ margin: "0 1rem 0 1rem" }}>
        <h3>Andres_Velasquez</h3>
      </div>

      <img
        style={{
          width: "3rem",
        }}
        src={glassesicon}
        alt="My Icon"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "0 1rem 0 1rem",
        }}
      >
        <p onClick={handleScrollToAbout} style={{ cursor: "pointer" }}>
          About
        </p>
        <p onClick={handleScrollToProjects} style={{ cursor: "pointer" }}>
          Projects
        </p>
        <p onClick={handleScrollToContact} style={{ cursor: "pointer" }}>
          Contact
        </p>
      </div>
    </Bar>
  );
}

export default NavBar;
