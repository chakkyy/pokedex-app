import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Wheel } from "react-custom-roulette";
import { useDispatch, useSelector } from "react-redux";
import {
  catchRoulette,
  getRoulettePokemons,
} from "../../Redux/Actions/Pokemon/PokemonActions";
import RouletteSound from "../../Sounds/Roulette.mp3";
import ClickSound from "../../Sounds/Click.mp3";
import { Howl } from "howler";
import Swal from "sweetalert2";
import {
  StyledLoadingImg,
  StyledContent,
  StyledCaptionContainer,
  StyledCaption,
  StyledRouletteContainer,
  StyledWheelContainer,
  StyledTryContainer,
  StyledTry,
  StyledIconContainer,
  StyledIcon,
} from "./StyledRoulette";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Roulette = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.roulette);
  const coins = useSelector((state) => state.pokemon.coins);
  const loading = useSelector((state) => state.pokemon.loading);
  const style = useSelector((state) => state.themes.style);
  const [active, setActive] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const rouletteSound = new Howl({
    src: [RouletteSound],
    volume: 0.3,
  });
  const clickSound = new Howl({
    src: [ClickSound],
    volume: 0.25,
  });

  useEffect(() => {
    if (pokemons.length > 0) return;
    dispatch(getRoulettePokemons());
  }, [dispatch, pokemons]);

  const random = 15;

  const handleClick = () => {
    clickSound.play();
    if (coins === 0) {
      Swal.fire({
        title: `What a bad luck...`,
        text: `Get some coins capturing Pokemons!`,
        imageUrl: `https://i.imgur.com/JCXuiqU.gif`,
        imageAlt: "pokeball",
        width: 400,
        position: "center",
      });
      return;
    }
    setMustSpin(true);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1900);
    setTimeout(() => {
      Swal.fire({
        title: capitalize(pokemons[random].name),
        text: `Fate has given you this ${pokemons[random].types[0].name} Pokemon, do you want to accept it and read what fate has in store for you?`,
        imageUrl: pokemons[random].image
          ? pokemons[random].image
          : pokemons[random].imageFrontDefault,
        imageAlt: "pokeball",
        width: 400,
        position: "center",
      });
      rouletteSound.play();
      dispatch(catchRoulette(pokemons[random].id));
      setMustSpin(false);
    }, 11000);
    setTimeout(() => {
      dispatch(getRoulettePokemons());
    }, 13000);
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <StyledRouletteContainer>
          <StyledLoadingImg src="https://i.imgur.com/hN8NZYh.gif" />
        </StyledRouletteContainer>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <StyledContent>
          <StyledCaptionContainer className={style === "glass" ? "glass" : ""}>
            <StyledCaption>Test your luck !</StyledCaption>
          </StyledCaptionContainer>
          <StyledRouletteContainer>
            <StyledWheelContainer className={style === "glass" ? "glass" : ""}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={random}
                data={pokemons}
                backgroundColors={["#CE1131", "black"]}
                textColors={["#ffffff"]}
                outerBorderColor={"black"}
                outerBorderWidth={6}
                innerRadius={10}
                innerBorderColor={"white"}
                innerBorderWidth={5}
                radiusLineColor={"black"}
                radiusLineWidth={5}
                fontSize={18}
              />
            </StyledWheelContainer>

            <StyledTryContainer className={style === "glass" ? "glass" : ""}>
              <StyledTry
                className={active ? "roulette" : ""}
                src="https://i.imgur.com/q5o0NkA.png"
                onClick={() => handleClick()}
              />
            </StyledTryContainer>
          </StyledRouletteContainer>

          <StyledCaptionContainer className={style === "glass" ? "glass" : ""}>
            <StyledIconContainer>
              <StyledIcon src="https://api.iconify.design/la:coins.svg" />
            </StyledIconContainer>
            <StyledCaption>Coins: {coins}</StyledCaption>
          </StyledCaptionContainer>
        </StyledContent>
      </>
    );
  }
};

export default Roulette;
