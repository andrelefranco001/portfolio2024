import "./App.css";
import "animate.css";

//components
import NavBar from "../components/NavBar/NavBar";

//img
import hello from "../public/hello.svg";
import gradient from "../public/planet1.svg";
import gradient2 from "../public/gradient7.svg";

import funnyface from "../public/funny_face.svg";
import todo from "../public/mytodo.png";
import calcula from "../public/mycalculator.png";
import game from "../public/mymemo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../public/photo1.jpg";

//styles
import { CardP, ContentBlock, ImgLogo, PhotoConteiner } from "./Style";
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10rem 0 20rem 0",
        }}
      >
        <div className="hola">
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ImgLogo
                // className="animate__animated animate__jello longer"
                style={{
                  width: "20rem",
                }}
                src={hello}
                alt="My Icon"
              />
            </div>

            <div
              style={{
                // width: "50%",
                marginTop: "4rem",
              }}
            >
              <p style={{ margin: "1rem" }}>
                I'm Andrés Velásquez, a frontend developer and UX/UI designer,{" "}
                bringing{" "}
                <b
                  style={{
                    background: "linear-gradient(90deg, #ffdd40, #d57171)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  new digital adventures to life.
                </b>
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "60%",
            }}
          >
            <div className="background-image"></div>

            <img
              className="animate__animated animate__jello longer"
              style={{
                width: "50rem",
              }}
              src={gradient}
              alt="My Icon"
            />
          </div>
        </div>
      </div>
      <ContentBlock id="about-section">
        <div className="hola2">
          <PhotoConteiner className="animate__animated animate__fadeIn">
            <div className="photo-wrapper">
              <img className="funnyface" src={funnyface} alt="Funny Face" />
              <img className="photo" src={photo} alt="My Icon" />
            </div>
          </PhotoConteiner>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                background: "linear-gradient(200deg, #6c5fe1, #d57171)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "3rem",
              }}
            >
              About
            </h3>
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
      <div
        id="projects-section"
        style={{
          display: "flex",
          marginTop: "20rem",
          justifyContent: "flex-start",
        }}
      >
        <h3
          style={{
            background: "linear-gradient(90deg, #6c5fe1, #d57171)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3rem",
          }}
        >
          Projects
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ContentBlock
          style={{
            marginTop: "1rem",
            background: "#202020",
            borderRadius: "20px",
            width: "fit-content",
          }}
        >
          <CardP>
            <img
              className="selectItem"
              onClick={() =>
                window.open(
                  "https://andrelefranco001.github.io/my-todo-list/build/",
                  "_blank"
                )
              }
              style={{
                width: "400px",
                height: "300px",
                cursor: "pointer",
                margin: "1rem",
                borderRadius: "20px",
              }}
              src={todo}
              alt="My Icon"
            />
            <p>My ToDo List</p>
          </CardP>
          <CardP>
            <img
              className="selectItem"
              onClick={() =>
                window.open(
                  "https://andrelefranco001.github.io/my-calculator/",
                  "_blank"
                )
              }
              style={{
                width: "400px",
                height: "300px",
                cursor: "pointer",
                margin: "1rem",
                borderRadius: "20px",
              }}
              src={calcula}
              alt="My Icon"
            />
            <p>My Calculator</p>
          </CardP>
          <CardP>
            <img
              className="selectItem"
              onClick={() =>
                window.open(
                  "https://andrelefranco001.github.io/my-memo-game/",
                  "_blank"
                )
              }
              style={{
                width: "400px",
                height: "300px",
                cursor: "pointer",
                margin: "1rem",
                borderRadius: "20px",
              }}
              src={game}
              alt="My Icon"
            />
            <p>My Memo Game</p>
          </CardP>
        </ContentBlock>
      </div>
      {/* <div
        id="contact-section"
        style={{
          display: "flex",
          // marginTop: "20rem",
          justifyContent: "flex-start",
        }}
      >
        <h3
          style={{
            background: "linear-gradient(90deg, #ffdd40, #d57171)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3rem",
          }}
        >
          Contact
        </h3>
      </div> */}
      <img
        className="second-background-image"
        style={{
          position: "absolute",
          bottom: "-90rem",
          right: "-5rem",
          width: "30rem",
          opacity: "0.7",
        }}
        src={gradient2}
        alt="Additional Background"
      />
      <ContentBlock
        id="contact-section"
        style={{
          marginTop: "20rem",
          borderRadius: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "2rem",
            width: "100%",
          }}
        >
          <div>
            <p>andresvelasquezfranco@gmail.com</p>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <GitHubIcon
                style={{
                  fontSize: "3rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://github.com/andrelefranco001", "_blank")
                }
              />

              <LinkedInIcon
                style={{
                  fontSize: "3rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/andressoftwareengineer/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </ContentBlock>
      <div style={{ display: "flex", justifyContent: "right" }}>
        {" "}
        <p style={{ fontSize: "0.8rem" }}>
          Designed and developed by Andres Velasquez - 2024
        </p>
      </div>
    </>
  );
}

export default App;
