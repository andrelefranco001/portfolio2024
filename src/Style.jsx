import styled from "styled-components";
import "animate.css";

// export const ProjectBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20rem;
//   justify-content: flex-start;

//   h3 {
//     align-self: flex-start;
//     font-size: 3rem;
//     margin: 1rem 0 1rem 0;
//     padding: 0 3rem 0 3rem;
//     background: linear-gradient(90deg, #6c5fe1, #d57171);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     text-fill-color: transparent;
//   }

//   /* Media query para tablets */
//   @media (min-width: 480px) and (max-width: 1024px) {
//     h3 {
//       font-size: 2rem;
//     }
//   }

//   /* Media query para móviles */
//   @media (max-width: 480px) {
//     h3 {
//       font-size: 1rem;
//     }
//   }
// `;

// export const CardBlock = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 1rem;
//   background: #202020;
//   border-radius: 20px;
//   width: fit-content;

//   /* Media query para tablets */
//   @media (min-width: 480px) and (max-width: 1024px) {
//     width: fit-content;
//   }

//   /* Media query para móviles */
//   @media (max-width: 480px) {
//     width: fit-content;
//   }
// `;

// export const CardP = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: auto;
//   padding: 2rem;
//   border-radius: 2rem;
//   margin-top: 2rem;

//   .selectItem {
//     transition: transform 0.3s ease;
//   }

//   .selectItem:hover {
//     transform: translateY(-10px);
//   }

//   p {
//     font-size: 1.3rem;
//     color: #bebebe;
//     padding: 0.5rem;
//   }

//   .img {
//     width: 400px;
//     height: 300px;
//     cursor: pointer;
//     margin: 1rem;
//     border-radius: 20px;
//   }
//   @media (max-width: 1024px) {
//     padding: 1.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 1rem;
//   }
// `;

export const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
  justify-content: flex-start;

  h3 {
    align-self: flex-start;
    font-size: 3rem;
    margin: 1rem 0;
    padding: 0 3rem;
    background: linear-gradient(90deg, #6c5fe1, #d57171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  /* Media query para tablets */
  @media (min-width: 480px) and (max-width: 1024px) {
  }

  /* Media query para móviles */
  @media (max-width: 480px) {
  }
`;

export const CardBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  background: #202020;
  border-radius: 20px;
  padding: 1rem;

  /* Media query para móviles */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 2rem;

  .selectItem {
    transition: transform 0.3s ease;
  }

  .selectItem:hover {
    transform: translateY(-10px);
  }

  p {
    font-size: 1.3rem;
    color: #bebebe;
    padding: 0.5rem;
  }

  .img {
    width: 100%;
    height: auto;
    cursor: pointer;
    margin: 1rem;
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ContactBlock = styled.div`
  margin-top: 20rem;
  border-radius: 20px;
  width: 100%;

  .mail {
    align-self: flex-start;
    font-size: 2rem;
    margin: 1rem 0 1rem 0;
    padding: 0 3rem 0 3rem;
    background: linear-gradient(90deg, #ffa040, #d57171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .contact-container1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2rem;
    width: 100%;
  }

  .contact-container2 {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    gap: 1rem;

    .social {
      display: flex;

      flex-direction: row;
    }

    .icon {
      font-size: 3rem;
      cursor: pointer;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 420px) and (max-width: 1024px) {
    .contact-container1 {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }
    .mail {
      font-size: 1.3rem;
    }
    .contact-container2 {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  gap: 3rem;

  .hola2 {
    display: flex;
    flex-direction: row;
    width: auto;
    line-height: 72px;
    letter-spacing: -0.03em;
    /* background-color: #202020; */
    background-repeat: repeat;
    border-radius: 2rem;
    padding: 1rem;
    text-align: left;
    gap: "2rem";
    margin-top: 5rem;
  }

  p {
    display: block;
    letter-spacing: 1px;
    font-size: 1.5rem;
    line-height: 40px;
    padding: 0 3rem 0 3rem;
  }

  h3 {
    font-size: 3rem;
    margin: 1rem 0 1rem 0;
    padding: 0 3rem 0 3rem;
    background: linear-gradient(200deg, #6c5fe1, #d57171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .content-block1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Media query para tablets */

  @media (min-width: 420px) and (max-width: 1024px) {
    justify-content: center;

    .hola2 {
      flex-direction: column;
    }
  }

  @media (min-width: 1025px) {
    /* width: 40rem; */
  }

  /* Media query para móviles */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.1rem;
      padding: 0 1.5rem;
    }

    h3 {
      font-size: 2rem;
      padding: 0 1.5rem;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
`;

export const ImgGradient = styled.img`
  width: 50rem;

  @media (max-width: 1280px) {
    display: none !important;
  }
`;

export const ImgGradient1 = styled.img`
  left: 7%;
  top: 140%;
  /* width: 550px; */
  position: absolute;
  z-index: -1;

  @media (min-width: 480px) and (max-width: 1024px) {
    width: 25rem;
  }

  @media (min-width: 1025px) {
    width: 40rem;
  }
`;

export const ImgGradient2 = styled.img`
  position: absolute;
  bottom: -90rem;
  right: -5rem;
  opacity: 0.7;
  z-index: -1;

  @media (min-width: 480px) and (max-width: 1024px) {
    width: 25rem;
  }

  @media (min-width: 1025px) {
    width: 30rem;
  }
`;

export const HolaContainer = styled.div`
  display: flex;
  margin: 10rem 0 20rem 0;

  .hola {
    display: flex;
    flex-direction: row;
    width: auto;
    font-size: 64px;
    line-height: 72px;
    font-weight: 500;
    letter-spacing: -0.03em;
    border-radius: 2rem;
    padding: 1rem;
    margin-top: 5rem;
    text-align: left;
  }

  .helloLogo {
    display: flex;
    flex-direction: row;
    @media (min-width: 480px) and (max-width: 1024px) {
      flex-direction: column-reverse;
    }
    @media (min-width: 420px) and (max-width: 479px) {
      flex-direction: column-reverse;
    }
  }

  .longer {
    display: inline-block;
    margin: 0 0.5rem;
    cursor: pointer;

    &:hover {
      animation: alternate;
    }
  }

  .ImgLogo {
    width: 20rem;
  }

  .container1 {
    margin-top: 4rem;
  }
  .container2 {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60%;
  }
  p {
    margin: 1rem;
  }

  b {
    background: linear-gradient(90deg, #ffdd40, #d57171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media (min-width: 420px) and (max-width: 1024px) {
    .hola {
      flex-direction: column-reverse;
      font-size: 55px;
    }

    .ImgLogo {
      width: 20rem;
    }
  }

  @media (min-width: 220px) and (max-width: 419px) {
    .hola {
      flex-direction: column-reverse;
      font-size: 47px;
    }
  }
`;

export const PhotoConteiner = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background: linear-gradient(234deg, #5d40ff 0%, #71a0d5 67%, #71abd5 100%);
  border-radius: 50%;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  .photo-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .funnyface {
    position: absolute;
    width: 145px;
    left: 17%;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    transition: opacity 0.3s ease;
  }

  .photo-wrapper:hover .funnyface {
    display: block;
  }

  /* Media query para tablets */
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;

    .photo {
      width: 200px;
      height: 200px;
    }

    .funnyface {
      width: 115px;
    }
  }

  /* Media query para móviles */
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    margin: 2rem;

    .photo {
      width: 150px;
      height: 150px;
    }

    .funnyface {
      width: 85px;
    }
  }
`;
