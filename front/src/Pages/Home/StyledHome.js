import styled from "styled-components";

export const StyledDivider = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const StyledCaption = styled.p`
  color: var(--font-color);
  text-align: center;
  font-size: 1.4em;
  border-radius: 1em;
  border: 0.2em solid var(--font-color);
  width: 50%;
  align-self: center;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border: 0.2em solid transparent;
  }
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;
