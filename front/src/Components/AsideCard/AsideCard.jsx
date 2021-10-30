import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../Redux/Actions/Pokemon/PokemonActions";
import {
  StyledContainer,
  StyledItem,
  StyledDotContainer,
  StyledBigDotContainer,
  StyledBlueDot,
  StyledLittleDotContainer,
  StyledRedDot,
  StyledYellowDots,
  StyledPokemonContainer,
  StyledImgContainer,
  StyledImg,
  StyledControlContainer,
  StyledControlLeft,
  StyledControlDetail,
  StyledControlImg,
  StyledControlName,
  StyledControlTransparent,
  StyledControlRight,
  StyledControlSquare,
} from "./StyledAsideCard";

const AsideCard = () => {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.themes.style);
  const pokemonCatch = useSelector((state) => state.pokemon.catchPokemon);

  return (
    <StyledContainer className={style === "glass" ? "glass" : ""}>
      <StyledItem>
        <StyledDotContainer>
          <StyledBigDotContainer>
            <StyledBlueDot />
          </StyledBigDotContainer>
          <StyledLittleDotContainer>
            <div>
              <StyledRedDot />
            </div>
            <div>
              <StyledYellowDots />
            </div>
            <div>
              <StyledYellowDots />
            </div>
          </StyledLittleDotContainer>
        </StyledDotContainer>
      </StyledItem>
      <StyledItem>
        <StyledPokemonContainer>
          <StyledImgContainer>
            {pokemonCatch.length > 0 ? (
              <StyledImg
                src={
                  pokemonCatch[pokemonCatch.length - 1].image
                    ? pokemonCatch[pokemonCatch.length - 1].image
                    : pokemonCatch[pokemonCatch.length - 1].imageFrontDefault
                }
              />
            ) : (
              <StyledImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif" />
            )}
          </StyledImgContainer>
        </StyledPokemonContainer>
      </StyledItem>

      <StyledItem>
        <StyledControlContainer>
          <StyledControlLeft>
            {pokemonCatch.length > 0 ? (
              <Link
                to={`/details/${pokemonCatch[pokemonCatch.length - 1].id}`}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() =>
                  dispatch(
                    getPokemonById(pokemonCatch[pokemonCatch.length - 1].id)
                  )
                }
              >
                <StyledControlDetail>
                  <StyledControlImg src="https://api.iconify.design/entypo:magnifying-glass.svg?color=white" />
                </StyledControlDetail>
              </Link>
            ) : (
              <StyledControlDetail>
                <StyledControlImg src="https://api.iconify.design/entypo:magnifying-glass.svg?color=white" />
              </StyledControlDetail>
            )}
            <StyledControlName>
              <p>Total: {pokemonCatch.length}</p>
            </StyledControlName>
            <StyledControlTransparent />
          </StyledControlLeft>

          <StyledControlRight>
            <StyledControlSquare>
              <StyledControlImg src="https://api.iconify.design/ant-design:caret-left-filled.svg?color=white" />
            </StyledControlSquare>
            <StyledControlSquare>
              <StyledControlImg src="https://api.iconify.design/ant-design:caret-right-filled.svg?color=white" />
            </StyledControlSquare>
          </StyledControlRight>
        </StyledControlContainer>
      </StyledItem>
    </StyledContainer>
  );
};

export default AsideCard;
