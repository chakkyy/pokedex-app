import styled from "styled-components";

export const StyledDivider = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  width: 68vw;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2em 0 0 0;
  height: 4em;
  width: 12em;
  border-radius: 2em;
  background: #ce1131;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.3s;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (max-width: 900px) {
    margin: 2em auto 0;
  }
`;
export const StyledCaption = styled.p`
  font-size: 1.2em;
  color: white;
`;
export const StyledIcon = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 1em;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
