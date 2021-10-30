import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--main-color);
  border-bottom: 0.2em solid black;
  height: 6em;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border-bottom: 0.2em solid transparent;
    border-radius: 2em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    p {
      color: black;
    }
    div {
      &:hover {
        text-shadow: none;
        color: var(--main-color);
      }
    }
  }
`;
export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    text-shadow: 3px 5px 8px black;
  }
`;
export const StyledCaption = styled.p`
  font-size: 1.4em;
  color: #ffffff;
  margin-left: 0.5em;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const StyledIcon = styled.img`
  height: 2.5em;
  width: 2.5em;
  padding: 0.5em;
  border-radius: 50%;
  background: white;
`;
