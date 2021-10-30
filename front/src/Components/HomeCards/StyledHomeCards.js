import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 2em;
  width: 12em;
  height: 16em;
  padding: 4em;
  margin: 2em;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    transform: scale(1.1);
  }
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
`;
export const StyledPic = styled.img`
  object-fit: contain;
  height: 6em;
  width: 6em;
`;
export const StyledId = styled.p`
  color: black;
  border: 0.1em solid black;
  border-radius: 2em;
  padding: 0.5em 1.5em 0.5em 1.5em;
`;
export const StyledName = styled.p`
  text-transform: capitalize;
`;
export const StyledTypeImgContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledTypeImg = styled.img`
  height: 3em;
  width: 3em;
  object-fit: contain;
  margin: 1em 1em 0 1em;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;
