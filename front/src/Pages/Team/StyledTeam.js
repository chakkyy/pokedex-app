import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 4em;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;
export const StyledImage = styled.img`
  height: 25em;
  width: 40em;
  align-self: center;
`;
export const StyledMessage = styled.p`
  color: var(--font-color);
  margin: 4em;
  font-size: 1.4em;
  line-height: 2em;
  border: 0.2em solid var(--font-color);
  padding: 4em;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border: 0.2em solid transparent;
  }
`;
