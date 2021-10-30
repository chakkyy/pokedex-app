import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  min-width: 20em;
  background: rgb(173, 0, 29);
  background: linear-gradient(
    90deg,
    rgba(173, 0, 29, 1) 0%,
    rgba(206, 17, 49, 1) 50%,
    rgba(173, 0, 29, 1) 100%
  );
  border-radius: 2em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const StyledItem = styled.div`
  margin: 0.5em 0 0.5em 0;
  border-radius: 1em;
`;
// *************** Dots ***************
export const StyledDotContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledLittleDotContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledBigDotContainer = styled.div`
  padding: 0.5em;
  background: white;
  border-radius: 50%;
  margin-left: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const StyledBlueDot = styled.div`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 253, 255, 1) 41%,
    rgba(0, 87, 167, 1) 100%
  );
  border-radius: 50%;
  padding: 2em;
`;
export const StyledYellowDots = styled.div`
  background: rgb(255, 241, 125);
  background: radial-gradient(
    circle,
    rgba(255, 241, 125, 1) 0%,
    rgba(255, 227, 0, 1) 48%,
    rgba(96, 86, 7, 1) 100%
  );
  border-radius: 50%;
  padding: 1em;
  margin: 0 0.5em 0 0.5em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const StyledRedDot = styled.div`
  background: rgb(255, 213, 202);
  background: radial-gradient(
    circle,
    rgba(255, 213, 202, 1) 0%,
    rgba(255, 55, 0, 1) 48%,
    rgba(255, 17, 0, 1) 100%
  );
  border-radius: 50%;
  padding: 1em;
  margin: 0 0.5em 0 0.5em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
// *************** Dots ***************

// *************** Pokemon ***************
export const StyledPokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  min-width: 12em;
  height: 12em;
  padding: 0.5em;
  border-radius: 1.5em;
  background: #2b2b2b;
  margin: auto;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 20%,
    100% 80%,
    100% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
`;
export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 1em;
  padding: 0.5em;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(172, 172, 172, 1) 86%,
    rgba(134, 134, 134, 1) 100%
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% 20%,
    100% 80%,
    100% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
`;
export const StyledImg = styled.img`
  object-fit: contain;
  height: 6em;
  width: 6em;
  filter: grayscale(100%);
`;
// *************** Pokemon ***************

// *************** Control ***************
export const StyledControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1em;
`;
export const StyledControlLeft = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StyledControlRight = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledControlDetail = styled.div`
  background: rgb(45, 45, 45);
  background: radial-gradient(
    circle,
    rgba(45, 45, 45, 1) 0%,
    rgba(28, 28, 28, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 50%;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const StyledControlTransparent = styled.div`
  background: transparent;
  padding: 2em;
`;
export const StyledControlName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(98, 210, 44);
  background: radial-gradient(
    circle,
    rgba(98, 210, 44, 1) 0%,
    rgba(64, 200, 0, 1) 86%,
    rgba(41, 116, 0, 1) 100%
  );
  border-radius: 0.5em;
  padding: 0em 1.5em 0em 1.5em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const StyledControlSquare = styled.div`
  background: rgb(45, 45, 45);
  background: radial-gradient(
    circle,
    rgba(45, 45, 45, 1) 0%,
    rgba(28, 28, 28, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 50%;
  margin: 1em 2em 1em 2em;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledControlImg = styled.img`
  height: 2em;
  width: 2em;
`;