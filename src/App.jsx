import "./App.css";
import "animate.css";

//components
import NavBar from "../components/NavBar/NavBar";

//img
import hello from "../public/hello.svg";
import gradient from "../public/planet1.svg";
import gradient1 from "../public/gradient1.svg";
import gradient2 from "../public/gradient7.svg";

import funnyface from "../public/funny_face.svg";
import todo from "../public/mytodo.png";
import calcula from "../public/mycalculator.png";
import game from "../public/mymemo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../public/photo1.jpg";

//styles
import {
  CardBlock,
  CardP,
  ContactBlock,
  ContentBlock,
  HolaContainer,
  ImgGradient,
  ImgGradient1,
  ImgGradient2,
  ImgLogo,
  PhotoConteiner,
  ProjectBlock,
} from "./Style";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const backgroundImage = document.querySelector(".background-image");
      const secondBackgroundImage = document.querySelector(
        ".second-background-image"
      );

      if (backgroundImage) {
        backgroundImage.style.transform = `translateY(${scrollY * -0.5}px)`; // Efecto parallax
      }

      if (secondBackgroundImage) {
        secondBackgroundImage.style.transform = `translateY(${
          scrollY * -0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavBar />

      <HolaContainer>
        <div className="hola">
          <div>
            <div className="helloLogo">
              <ImgLogo className="ImgLogo" src={hello} alt="My Icon" />
            </div>

            <div className="container1">
              <p>
                I'm Andrés Velásquez, a frontend developer and UX/UI designer,{" "}
                bringing <b>new digital adventures to life.</b>
              </p>
            </div>
          </div>

          <div className="container2">
            <ImgGradient1
              className="background-image"
              src={gradient1}
              alt="Additional Background"
            />
            <ImgGradient
              className="animate__animated animate__jello longer"
              src={gradient}
              alt="My Icon"
            />
          </div>
        </div>
      </HolaContainer>
      <ContentBlock id="about-section">
        <div className="hola2">
          <PhotoConteiner className="animate__animated animate__fadeIn">
            <div className="photo-wrapper">
              <img className="funnyface" src={funnyface} alt="Funny Face" />
              <img className="photo" src={photo} alt="My Icon" />
            </div>
          </PhotoConteiner>
          <div className="content-block1">
            <h3>About</h3>
            <p>
              {" "}
              Specialized in Frontend and UI/UX, I create user interfaces that
              are both visually appealing and intuitive. I focus on balancing
              design and functionality, working closely with teams to meet
              client goals and uphold high design standards. Committed to
              innovation and continuous improvement, I optimize performance and
              accessibility to ensure an excellent user experience.
            </p>
          </div>
        </div>
      </ContentBlock>
      <ProjectBlock id="projects-section">
        <h3>Projects</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardBlock>
            <CardP>
              <img
                className="selectItem img"
                onClick={() =>
                  window.open(
                    "https://andrelefranco001.github.io/my-todo-list/build/",
                    "_blank"
                  )
                }
                src={todo}
                alt="My Icon"
              />
              <p>My ToDo List</p>
            </CardP>
            <CardP>
              <img
                className="selectItem img"
                onClick={() =>
                  window.open(
                    "https://andrelefranco001.github.io/my-calculator/",
                    "_blank"
                  )
                }
                src={calcula}
                alt="My Icon"
              />
              <p>My Calculator</p>
            </CardP>
            <CardP>
              <img
                className="selectItem img"
                onClick={() =>
                  window.open(
                    "https://andrelefranco001.github.io/my-memo-game/",
                    "_blank"
                  )
                }
                src={game}
                alt="My Icon"
              />
              <p>My Memo Game</p>
            </CardP>
          </CardBlock>
        </div>
      </ProjectBlock>

      <ImgGradient2
        className="second-background-image"
        src={gradient2}
        alt="Additional Background"
      />
      <ContactBlock id="contact-section">
        <div className="contact-container1">
          <div>
            <p className="mail">andresvelasquezfranco@gmail.com</p>
          </div>
          <div>
            <div className="contact-container2">
              <div className="social">
                <GitHubIcon
                  className="icon"
                  onClick={() =>
                    window.open("https://github.com/andrelefranco001", "_blank")
                  }
                />

                <LinkedInIcon
                  className="icon"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/andressoftwareengineer/",
                      "_blank"
                    )
                  }
                />
              </div>

              <div>
                {" "}
                <p className="footer">
                  Designed and developed by Andres Velasquez - 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContactBlock>
    </>
  );
}

export default App;
