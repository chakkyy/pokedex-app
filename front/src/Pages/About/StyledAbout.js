import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  a {
    cursor: pointer;
  }
`;
export const StyledTitle = styled.p`
  color: var(--font-color);
  font-size: 1.8em;
  margin-top: 2em;
  text-align: center;
`;

export const StyledDescription = styled.p`
  color: var(--font-color);
  font-size: 1.2em;
  a {
    text-decoration: none;
    color: red;
  }
  margin-bottom: 3em;
  width: 50%;
  text-align: center;
  line-height: 2em;
`;
export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
`;
export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
  transition: 0.35s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledCaption = styled.p`
  color: var(--font-color);
  font-size: 1.4em;
  text-align: center;
`;
export const StyledPhoto = styled.img`
  height: 20em;
  width: 20em;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.2em solid var(--font-color);
  border-radius: 2em;
  margin: 2em;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border: 0.2em solid transparent;
  }
`;
export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  span {
    cursor: pointer;
  }
`;
export const StyledIcon = styled.img`
  height: 3.5em;
  width: 3.5em;
  margin: 0 0.5em;
  transition: 0.25s;
  &:hover {
    transform: scale(1.2);
  }
`;
