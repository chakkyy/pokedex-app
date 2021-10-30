import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deletePokemon } from "../../Redux/Actions/Pokemon/PokemonActions";
import DeleteSound from "../../Sounds/Delete.mp3";
import { Howl } from "howler";
import {
  StyledTeam,
  StyledCard,
  StyledImgContainer,
  StyledDataContainer,
  StyledPic,
  StyledTitle,
  StyledCaption,
  StyledIcon,
  StyledDelete,
} from "./StyledTeamCard";

const TeamCard = ({ pokemonTeam }) => {
  const style = useSelector((state) => state.themes.style);
  const dispatch = useDispatch();

  const deleteSound = new Howl({
    src: [DeleteSound],
    volume: 0.3,
  });

  const handleDelete = (id) => {
    dispatch(deletePokemon(id));
    Swal.fire({
      title: `Pokemon Deleted!`,
      text: ``,
      imageUrl: "https://i.imgur.com/Z3kIkFf.gif",
      imageAlt: "pokeball",
      width: 500,
      position: "top",
    });
    deleteSound.play();
  };

  const selectType = (type) => {
    if (style === "glass") {
      return "glass";
    } else {
      switch (type.name) {
        case "normal": {
          return "normal";
        }
        case "fire": {
          return "fire";
        }
        case "water": {
          return "water";
        }
        case "electric": {
          return "electric";
        }
        case "grass": {
          return "grass";
        }
        case "ice": {
          return "ice";
        }
        case "fighting": {
          return "fighting";
        }
        case "poison": {
          return "poison";
        }
        case "ground": {
          return "ground";
        }
        case "flying": {
          return "flying";
        }
        case "psychic": {
          return "psychic";
        }
        case "bug": {
          return "bug";
        }
        case "rock": {
          return "rock";
        }
        case "ghost": {
          return "ghost";
        }
        case "dragon": {
          return "dragon";
        }
        case "dark": {
          return "dark";
        }
        case "steel": {
          return "steel";
        }
        case "fairy": {
          return "fairy";
        }
        default:
          return "normal";
      }
    }
  };

  return (
    <StyledTeam>
      {pokemonTeam?.map((pokemon) => (
        <StyledCard key={pokemon.id} className={selectType(pokemon.types[0])}>
          <StyledTitle>
            #{pokemon.id} {pokemon.name} - {pokemon.types[0].name}{" "}
            {pokemon.types[1] ? `& ${pokemon.types[1].name}` : null} Type
          </StyledTitle>
          <StyledImgContainer>
            <div>
              {pokemon.image || pokemon.imageFrontDefault ? (
                <StyledPic
                  src={
                    pokemon.image ? pokemon.image : pokemon.imageFrontDefault
                  }
                  alt={pokemon.name}
                />
              ) : null}
            </div>
            <div>
              {pokemon.imageBack ? (
                <StyledPic src={pokemon.imageBack} alt={pokemon.name} />
              ) : null}
            </div>
          </StyledImgContainer>
          <StyledDataContainer>
            <div>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/pixelarticons:human-height-alt.svg" />
                Height {pokemon.height}
              </StyledCaption>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/fa-solid:weight-hanging.svg" />
                Weight {pokemon.weight}
              </StyledCaption>
              {pokemon.abilities ? (
                <StyledCaption>
                  <StyledIcon src="https://api.iconify.design/ant-design:star-filled.svg" />
                  {pokemon.abilities[0]
                    ? pokemon.abilities[0].ability.name
                    : null}
                </StyledCaption>
              ) : null}
              {pokemon.abilities[1] ? (
                <StyledCaption>
                  <StyledIcon src="https://api.iconify.design/ant-design:star-filled.svg" />
                  {pokemon.abilities[0]
                    ? pokemon.abilities[1].ability.name
                    : null}
                </StyledCaption>
              ) : null}
            </div>
            <div>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/clarity:heart-solid.svg" />
                HP {pokemon.hp}
              </StyledCaption>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/jam:sword-f.svg" />
                ATK {pokemon.attack}
              </StyledCaption>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/bx:bxs-shield-alt-2.svg" />
                DEF {pokemon.defense}
              </StyledCaption>
              <StyledCaption>
                <StyledIcon src="https://api.iconify.design/ri:speed-fill.svg" />
                SPD {pokemon.speed}
              </StyledCaption>
            </div>
          </StyledDataContainer>

          <StyledDelete
            src="https://api.iconify.design/ant-design:delete-filled.svg?color=%23ba000d"
            onClick={() => handleDelete(pokemon.id)}
          />
        </StyledCard>
      ))}
    </StyledTeam>
  );
};

export default TeamCard;
