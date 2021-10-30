import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import TeamCard from "../../Components/TeamCard/TeamCard";
import { useSelector } from "react-redux";
import {
  StyledContent,
  StyledError,
  StyledImage,
  StyledMessage,
} from "./StyledTeam";

const Team = () => {
  const pokemonTeam = useSelector((state) => state.pokemon.catchPokemon);
  const style = useSelector((state) => state.themes.style);

  return (
    <div>
      <NavBar />
      <StyledContent>
        {pokemonTeam.length > 0 ? (
          <TeamCard pokemonTeam={pokemonTeam} />
        ) : (
          <StyledError>
            <StyledImage src="https://i.imgur.com/Gxquf3w.gif" />
            <StyledMessage className={style === "glass" ? "glass" : ""}>
              You need to catch one Pokemon first ! <br /> Catch at least 1 and
              come back again.
            </StyledMessage>
          </StyledError>
        )}
      </StyledContent>
    </div>
  );
};

export default Team;
