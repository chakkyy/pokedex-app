import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-self: center;
  border-radius: 2em;
  width: 90%;
  height: 40em;
  padding: 2em;
  margin: 2em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.3s;
  &.normal {
    background: rgb(168, 167, 122);
    background: radial-gradient(
      circle,
      rgba(168, 167, 122, 1) 0%,
      rgba(168, 167, 122, 1) 35%,
      rgba(140, 139, 105, 1) 100%
    );
  }
  &.fire {
    background: rgb(238, 129, 48);
    background: radial-gradient(
      circle,
      rgba(238, 129, 48, 1) 0%,
      rgba(238, 129, 48, 1) 35%,
      rgba(255, 90, 0, 1) 100%
    );
  }
  &.water {
    background: rgb(99, 144, 240);
    background: radial-gradient(
      circle,
      rgba(99, 144, 240, 1) 0%,
      rgba(99, 144, 240, 1) 35%,
      rgba(35, 105, 255, 1) 100%
    );
  }
  &.electric {
    background: rgb(247, 208, 44);
    background: radial-gradient(
      circle,
      rgba(247, 208, 44, 1) 0%,
      rgba(247, 208, 44, 1) 35%,
      rgba(230, 156, 36, 1) 100%
    );
  }
  &.grass {
    background: rgb(122, 199, 76);
    background: radial-gradient(
      circle,
      rgba(122, 199, 76, 1) 0%,
      rgba(122, 199, 76, 1) 35%,
      rgba(81, 186, 18, 1) 100%
    );
  }
  &.ice {
    background: rgb(179, 236, 233);
    background: radial-gradient(
      circle,
      rgba(179, 236, 233, 1) 0%,
      rgba(150, 217, 214, 1) 35%,
      rgba(86, 219, 213, 1) 100%
    );
  }
  &.fighting {
    background: rgb(194, 46, 40);
    background: radial-gradient(
      circle,
      rgba(194, 46, 40, 1) 0%,
      rgba(194, 46, 40, 1) 35%,
      rgba(187, 24, 17, 1) 100%
    );
  }
  &.poison {
    background: rgb(156, 66, 154);
    background: radial-gradient(
      circle,
      rgba(156, 66, 154, 1) 0%,
      rgba(163, 62, 161, 1) 35%,
      rgba(160, 26, 143, 1) 100%
    );
  }
  &.ground {
    background: rgb(218, 108, 30);
    background: radial-gradient(
      circle,
      rgba(218, 108, 30, 1) 0%,
      rgba(218, 112, 36, 1) 50%,
      rgba(177, 94, 33, 1) 100%
    );
  }
  &.flying {
    background: rgb(163, 145, 255);
    background: radial-gradient(
      circle,
      rgba(163, 145, 255, 1) 0%,
      rgba(134, 128, 255, 1) 50%,
      rgba(117, 110, 254, 1) 100%
    );
  }
  &.psychic {
    background: rgb(249, 85, 135);
    background: radial-gradient(
      circle,
      rgba(249, 85, 135, 1) 0%,
      rgba(249, 85, 135, 1) 35%,
      rgba(228, 58, 110, 1) 100%
    );
  }
  &.bug {
    background: rgb(191, 213, 26);
    background: radial-gradient(
      circle,
      rgba(191, 213, 26, 1) 0%,
      rgba(166, 185, 26, 1) 35%,
      rgba(98, 185, 26, 1) 100%
    );
  }
  &.rock {
    background: rgb(168, 153, 122);
    background: radial-gradient(
      circle,
      rgba(168, 153, 122, 1) 0%,
      rgba(168, 153, 122, 1) 50%,
      rgba(147, 123, 70, 1) 100%
    );
  }
  &.ghost {
    background: rgb(115, 87, 151);
    background: radial-gradient(
      circle,
      rgba(115, 87, 151, 1) 0%,
      rgba(115, 87, 151, 1) 35%,
      rgba(107, 41, 142, 1) 100%
    );
  }
  &.dragon {
    background: rgb(118, 61, 255);
    background: radial-gradient(
      circle,
      rgba(118, 61, 255, 1) 0%,
      rgba(111, 53, 252, 1) 35%,
      rgba(74, 0, 255, 1) 100%
    );
  }
  &.dark {
    background: rgb(47, 47, 47);
    background: radial-gradient(
      circle,
      rgba(47, 47, 47, 1) 0%,
      rgba(24, 24, 24, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    p {
      color: white;
    }
  }
  &.steel {
    background: rgb(183, 183, 206);
    background: radial-gradient(
      circle,
      rgba(183, 183, 206, 1) 0%,
      rgba(183, 183, 206, 1) 35%,
      rgba(103, 103, 103, 1) 100%
    );
  }
  &.fairy {
    background: rgb(214, 133, 173);
    background: radial-gradient(
      circle,
      rgba(214, 133, 173, 1) 0%,
      rgba(214, 133, 173, 1) 35%,
      rgba(210, 97, 153, 1) 100%
    );
  }
  &.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(0.4em);
    -webkit-backdrop-filter: blur(0.4em);
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin: 2em 0 2em 0;
`;
export const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const StyledPic = styled.img`
  object-fit: contain;
  height: 8em;
  width: 8em;
`;
export const StyledTitle = styled.p`
  color: black;
  font-size: 1.2em;
  border: 0.1em solid black;
  border-radius: 2em;
  padding: 1em 2em 1em 2em;
  text-transform: uppercase;
`;
export const StyledCaption = styled.p`
  display: flex;
  align-items: center;
  margin: 2em 0 2em 0;
  text-transform: capitalize;
`;
export const StyledIcon = styled.img`
  height: 2em;
  width: 2em;
  margin-right: 1em;
  padding: 0.5em;
  border-radius: 50%;
  background: white;
`;
export const StyledCatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin-top: -2.3em;
  transition: 0.3s;
  @keyframes move-to-the-side {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(1em);
    }
    100% {
      transform: translateX(0);
    }
  }
  &:hover {
    animation: move-to-the-side 750ms infinite;
    cursor: pointer;
    p {
      visibility: visible;
      text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
        1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    }
  }
`;
export const StyledCatchText = styled.p`
  visibility: hidden;
  font-size: 1.4em;
  color: black !important;
`;
export const StyledPokeball = styled.img`
  width: 8em;
  height: 8em;
  align-self: center;
`;
