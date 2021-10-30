import styled from "styled-components";

export const StyledNumbersContainer = styled.ul`
  align-self: center;
  color: black;
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: -2em;
  @media (max-width: 900px) {
    margin-top: 0;
  }
`;
export const StyledPageNumbers = styled.li`
  color: var(--font-color);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
  padding: 1.6em;
  border-radius: 50%;
  transition: all 0.3s linear;
  &:hover {
    color: #ff1744;
    transform: scale(1.15);
  }
  &.active {
    background-color: #ff1744;
    color: #000000;
  }
  &.glass {
    &.active {
      background-color: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(0.4em);
      -webkit-backdrop-filter: blur(0.4em);
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const StyledButton = styled.button`
  font-family: "Press Start 2P";
  font-size: 1.2em;
  text-align: center;
  padding: 1.6em;
  background-color: transparent;
  border: none;
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.3s linear;
  &.glass {
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(0.4em);
      -webkit-backdrop-filter: blur(0.4em);
    }
  }
  &:hover {
    background: #ff1744;
    color: #000000;
  }
  &:focus {
    outline: none;
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 78vw;
  h2 {
    text-align: center;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100vw;
  }
`;
export const StyledLoadingImg = styled.img`
  margin-top: 4em;
  height: 40em;
  width: 40em;
  border-radius: 50%;
  align-self: center;
`;
export const StyledUpButtonContainer = styled.div`
  background: #ff1744;
  border-radius: 50%;
  align-self: center;
  padding: -6em;
  visibility: hidden;
  @keyframes static-vertical {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.5em);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: static-vertical 1000ms infinite;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    visibility: visible;
    padding: 1em;
  }
`;
export const StyledUpButton = styled.img`
  height: 2.5em;
  width: 2.5em;
  object-fit: contain;
`;
