import styled from "styled-components";
import "animate.css";

export const ImgLogo = styled.img``;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;

  gap: 3rem;

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
  }

  // Media query para pantallas entre 480px y 1024px
  @media (min-width: 480px) and (max-width: 1900px) {
    flex-direction: column; // Cambia a columna para pantallas medianas
    width: fit-content;
    align-items: center;

    p {
      font-size: 1.3rem; // Ajusta el tamaño de la fuente
      padding: 0 2rem; // Ajusta el padding
    }

    h3 {
      font-size: 2.5rem; // Ajusta el tamaño del título
      padding: 0 2rem;
    }
  }

  // Media query para pantallas menores a 480px (móviles)
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
      font-size: 1.1rem; // Reduce aún más el tamaño de la fuente
      padding: 0 1rem; // Reduce el padding
    }

    h3 {
      font-size: 2rem; // Reduce el tamaño del encabezado
      padding: 0 1rem;
    }
  }
`;

export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  padding: 2rem;

  /* background-color: #202020; */
  border-radius: 2rem;
  padding: 2rem;
  text-align: left;
  gap: "2rem";
  margin-top: 2rem;
`;

export const PhotoConteiner = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  background: rgb(77, 64, 255);
  background: linear-gradient(234deg, #5d40ff 0%, #71a0d5 67%, #71abd5 100%);
  border-radius: 50%;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  /* position: absolute; */

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
    left: 16%;
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
`;
