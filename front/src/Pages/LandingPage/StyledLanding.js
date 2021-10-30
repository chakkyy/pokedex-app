import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.imgur.com/iWdJwQU.gif");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const StyledTitle = styled.h2`
  font-size: 2.6em;
  color: white;
  text-shadow: 3px 5px 8px black;
`;
export const StyledImg = styled.img`
  padding: 4em;
  background-image: url("https://i.imgur.com/q5o0NkA.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
