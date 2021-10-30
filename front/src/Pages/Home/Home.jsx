import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import HomeAside from "../../Components/HomeAside/HomeAside";
import HomeContent from "../../Components/HomeContent/HomeContent";
import { useSelector } from "react-redux";
import { StyledDivider, StyledCaption, StyledContent } from "./StyledHome";

const Home = () => {
  const style = useSelector((state) => state.themes.style);

  return (
    <div>
      <NavBar />
      <StyledDivider>
        <HomeAside key="home-aside" />
        <StyledContent>
          <StyledCaption className={style === "glass" ? "glass" : ""}>
            Some wild Pokemon have appeared!
          </StyledCaption>
          <HomeContent key="home-content" />
        </StyledContent>
      </StyledDivider>
    </div>
  );
};

export default Home;
