import React from "react";
import { Link } from "react-router-dom";
import Opening from "../../Sounds/Opening.mp3";
import { Howl } from "howler";
import {
  StyledLanding,
  StyledContainer,
  StyledTitle,
  StyledImg,
} from "./StyledLanding";

const LandingPage = () => {
  const openingSound = new Howl({
    src: [Opening],
    volume: 0.4,
  });

  return (
    <>
      <StyledLanding>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <StyledContainer onClick={() => openingSound.play()}>
            <StyledImg />
            <StyledTitle>Enter</StyledTitle>
          </StyledContainer>
        </Link>
      </StyledLanding>
    </>
  );
};

export default LandingPage;
