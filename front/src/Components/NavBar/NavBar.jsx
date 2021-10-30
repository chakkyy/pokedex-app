import React from "react";
import Toggles from "../Toggles/Toggles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Click from "../../Sounds/Click.mp3";
import { Howl } from "howler";
import {
  StyledNav,
  StyledIconContainer,
  StyledCaption,
  StyledIcon,
} from "./StyledNavBar";

const NavBar = () => {
  const style = useSelector((state) => state.themes.style);

  const click = new Howl({
    src: [Click],
    volume: 0.25,
  });

  return (
    <>
      <StyledNav className={style === "glass" ? "glass" : ""}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <StyledIconContainer onClick={() => click.play()}>
            <StyledIcon src="https://api.iconify.design/ant-design:home-filled.svg" />
            <StyledCaption>Home</StyledCaption>
          </StyledIconContainer>
        </Link>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <StyledIconContainer onClick={() => click.play()}>
            <StyledIcon src="https://i.imgur.com/q5o0NkA.png" />
            <StyledCaption>Your Team</StyledCaption>
          </StyledIconContainer>
        </Link>
        <Link to="roulette" style={{ textDecoration: "none" }}>
          <StyledIconContainer onClick={() => click.play()}>
            <StyledIcon src="https://api.iconify.design/ion:dice-sharp.svg" />
            <StyledCaption>PokeRoulette</StyledCaption>
          </StyledIconContainer>
        </Link>
        {/* <Caption>Create Pokemon</Caption> */}
        <Link to="/about" style={{ textDecoration: "none" }}>
          <StyledIconContainer onClick={() => click.play()}>
            <StyledIcon src="https://api.iconify.design/heroicons-solid:users.svg" />
            <StyledCaption>About</StyledCaption>
          </StyledIconContainer>
        </Link>
        <div>
          <Toggles />
        </div>
      </StyledNav>
    </>
  );
};

export default NavBar;
