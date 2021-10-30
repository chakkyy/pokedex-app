import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../Redux/Actions/Pokemon/PokemonActions";
import { Link } from "react-router-dom";
import Click from "../../Sounds/Click.mp3";
import { Howl } from "howler";
import {
  StyledCard,
  StyledPic,
  StyledId,
  StyledName,
  StyledTypeImgContainer,
  StyledTypeImg,
} from "./StyledHomeCards";

const HomeCards = ({ pokemon }) => {
  const style = useSelector((state) => state.themes.style);
  const dispatch = useDispatch();

  const click = new Howl({
    src: [Click],
    volume: 0.25,
  });

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

  const selectTypeImage = (type) => {
    switch (type.name) {
      case "normal": {
        return "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg";
      }
      case "fire": {
        return "https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg";
      }
      case "water": {
        return "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg";
      }
      case "electric": {
        return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg";
      }
      case "grass": {
        return "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pokémon_Grass_Type_Icon.svg";
      }
      case "ice": {
        return "https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg";
      }
      case "fighting": {
        return "https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg";
      }
      case "poison": {
        return "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg";
      }
      case "ground": {
        return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg";
      }
      case "flying": {
        return "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokémon_Flying_Type_Icon.svg";
      }
      case "psychic": {
        return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg";
      }
      case "bug": {
        return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pokémon_Bug_Type_Icon.svg";
      }
      case "rock": {
        return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg";
      }
      case "ghost": {
        return "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokémon_Ghost_Type_Icon.svg";
      }
      case "dragon": {
        return "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pokémon_Dragon_Type_Icon.svg";
      }
      case "dark": {
        return "https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg";
      }
      case "steel": {
        return "https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg";
      }
      case "fairy": {
        return "https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg";
      }
      default:
        return "normal";
    }
  };

  return (
    <>
      <Link
        to={`/details/${pokemon.id}`}
        style={{ textDecoration: "none", color: "black", width: "min-content" }}
        onClick={() => dispatch(getPokemonById(pokemon.id))}
      >
        <StyledCard
          key={pokemon.id}
          className={selectType(pokemon.types[0])}
          onClick={() => click.play()}
        >
          {pokemon.image || pokemon.imageFrontDefault ? (
            <StyledPic
              src={pokemon.image ? pokemon.image : pokemon.imageFrontDefault}
              alt={pokemon.name}
            />
          ) : null}
          <StyledId>#{pokemon.id}</StyledId>
          <StyledName>{pokemon.name}</StyledName>
          <StyledTypeImgContainer>
            <StyledTypeImg src={selectTypeImage(pokemon.types[0])} />
            {pokemon.types[1] ? (
              <StyledTypeImg src={selectTypeImage(pokemon.types[1])} />
            ) : null}
          </StyledTypeImgContainer>
        </StyledCard>
      </Link>
    </>
  );
};

export default HomeCards;
