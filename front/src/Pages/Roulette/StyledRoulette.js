import styled from "styled-components";

export const StyledLoadingImg = styled.img`
  margin-top: 4em;
  height: 40em;
  width: 40em;
  border-radius: 50%;
  align-self: center;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledCaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 1em;
  border: 0.3em solid var(--font-color);
  padding: 1em;
  margin-left: -5em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 40em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border: 0.3em solid transparent;
  }
`;
export const StyledCaption = styled.p`
  color: var(--font-color);
  font-size: 1.4em;
`;
export const StyledRouletteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
`;
export const StyledWheelContainer = styled.div`
  background: white;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
  }
`;
export const StyledTryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.3em solid var(--font-color);
  border-radius: 4em;
  margin-left: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
    border: 0.3em solid transparent;
  }
`;
export const StyledTry = styled.img`
  height: 4em;
  width: 4em;
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

  &:hover {
    cursor: pointer;
  }
  &.roulette {
    @keyframes move-vertical {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(40em);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: move-vertical 2000ms infinite;
  }
`;
export const StyledIconContainer = styled.div`
  background: gold;
  border-radius: 50%;
  margin-right: 1em;
`;
export const StyledIcon = styled.img`
  height: 4em;
  width: 4em;
`;
