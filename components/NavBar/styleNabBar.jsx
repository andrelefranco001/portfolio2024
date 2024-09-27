import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 2rem;
  padding: 1rem;
  border-radius: 5rem;
  background: #202020;

  .options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 0 1rem 0 1rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 1rem;
  }
`;
