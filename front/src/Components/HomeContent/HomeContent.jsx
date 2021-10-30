import React, { useEffect, useState } from "react";
import HomeCards from "../HomeCards/HomeCards";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../Redux/Actions/Pokemon/PokemonActions";
import ClickSound from "../../Sounds/Click.mp3";
import { Howl } from "howler";
import {
  StyledNumbersContainer,
  StyledPageNumbers,
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledLoadingImg,
  StyledUpButtonContainer,
  StyledUpButton,
} from "./StyledHomeContent";

const HomeContent = () => {
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const loading = useSelector((state) => state.pokemon.loading);
  const style = useSelector((state) => state.themes.style);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length > 0) return;
    dispatch(getAllPokemons(151, 0));
  }, [dispatch, pokemons]);

  const clickSound = new Howl({
    src: [ClickSound],
    volume: 0.15,
  });

  // ******************** Paginado ********************

  // Página actual, inicializada en 1
  const [currentPage, setCurrentPage] = useState(1);
  // Cards o Items que voy a mostrar por página
  const [itemsPerPage] = useState(12);
  // Número de páginas que quiero mostrar
  const [pageNumberLimit] = useState(5);
  // Máximo de páginas
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  // Mínimo de páginas
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // En cada página voy a insertar las cards
  const pages = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pages.push(i);
  }

  // Información de los items que voy a mostrar en cada página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // const handleMoreBtn = () => {
  //     setItemsPerPage(itemsPerPage + 8)
  // }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <StyledButton
        className={style === "glass" ? "glass" : ""}
        onClick={handleNextBtn}
      >
        &hellip;
      </StyledButton>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <StyledButton
        className={style === "glass" ? "glass" : ""}
        onClick={handlePrevBtn}
      >
        &hellip;
      </StyledButton>
    );
  }

  // Renderizamos los números de las páginas como (<Li>)
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      const active = currentPage === number ? "active" : null;
      const glass = style === "glass" ? "glass" : "";
      return (
        <StyledPageNumbers
          className={`${active} ${glass}`}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </StyledPageNumbers>
      );
    } else {
      return null;
    }
  });

  // ******************** Paginado ********************

  if (loading) {
    return (
      <StyledContent key="home-content">
        <StyledLoadingImg src="https://i.imgur.com/hN8NZYh.gif" />
      </StyledContent>
    );
  } else {
    return (
      <>
        <StyledContainer>
          <StyledContent key="home-content">
            {currentItems.map((pokemon) => (
              <HomeCards pokemon={pokemon} key={pokemon.id} />
            ))}
          </StyledContent>
        </StyledContainer>

        <StyledUpButtonContainer
          className={style === "glass" ? "glass" : ""}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <StyledUpButton src="https://api.iconify.design/ant-design:caret-up-filled.svg" />
        </StyledUpButtonContainer>

        <StyledNumbersContainer
          className={style === "glass" ? "glass" : ""}
          onClick={() => clickSound.play()}
        >
          <StyledButton
            className={style === "glass" ? "glass" : ""}
            onClick={handlePrevBtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </StyledButton>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <StyledButton
            className={style === "glass" ? "glass" : ""}
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </StyledButton>
        </StyledNumbersContainer>
      </>
    );
  }
};

export default HomeContent;
