import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { catchPokemon } from "../../Redux/Actions/Pokemon/PokemonActions";
import Catch from "../../Sounds/Catch.mp3";
import { Howl } from "howler";
import Swal from "sweetalert2";
import {
  StyledCard,
  StyledTitle,
  StyledImgContainer,
  StyledPic,
  StyledIcon,
  StyledDataContainer,
  StyledCaption,
  StyledCatchContainer,
  StyledCatchText,
  StyledPokeball,
} from "./StyledDetailCard";

const DetailCard = ({ pokemon }) => {
  const style = useSelector((state) => state.themes.style);
  const dispatch = useDispatch();
  const history = useHistory();
  const catchSound = new Howl({
    src: [Catch],
    volume: 0.3,
  });

  const handleClick = (id) => {
    dispatch(catchPokemon(id));
    Swal.fire({
      title: `Gotta catch 'em all!`,
      text: `This Pokemon will appear in TEAM Section!`,
      imageUrl: "https://i.imgur.com/hY4kEI1.gif",
      imageAlt: "pokeball",
      width: 500,
      position: "top",
    });
    catchSound.play();
    history.push("/home");
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
    <>
      {pokemon?.map((pokemon) => (
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

          <StyledCatchContainer onClick={() => handleClick(pokemon.id)}>
            <StyledCatchText>Catch</StyledCatchText>
            <StyledPokeball src="https://i.imgur.com/q5o0NkA.png" />
            <StyledCatchText>Now!!</StyledCatchText>
          </StyledCatchContainer>
        </StyledCard>
      ))}
    </>
  );
};

export default DetailCard;
