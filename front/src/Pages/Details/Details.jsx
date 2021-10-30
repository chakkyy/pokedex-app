import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import HomeAside from "../../Components/HomeAside/HomeAside";
import DetailCard from "../../Components/DetailCard/DetailCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Click from "../../Sounds/Click.mp3";
import { Howl } from "howler";
import {
  StyledDivider,
  StyledContent,
  StyledButton,
  StyledCaption,
  StyledIcon,
} from "./StyledDetails";

const Details = () => {
  const style = useSelector((state) => state.themes.style);
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  const clickSound = new Howl({
    src: [Click],
    volume: 0.25,
  });

  return (
    <div>
      <NavBar />
      <StyledDivider>
        <HomeAside />
        <StyledContent>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <StyledButton
              className={style === "glass" ? "glass" : ""}
              onClick={() => clickSound.play()}
            >
              <StyledIcon src="https://api.iconify.design/mdi:run-fast.svg" />
              <StyledCaption>RUN</StyledCaption>
            </StyledButton>
          </Link>
          <DetailCard pokemon={pokemon} />
        </StyledContent>
      </StyledDivider>
    </div>
  );
};

export default Details;
