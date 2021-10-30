import React from "react";
import AsideCard from "../AsideCard/AsideCard";
import AsideMenu from "../AsideMenu/AsideMenu";
import { useSelector } from "react-redux";
import { StyledHomeAside } from "./StyledHomeAside";

const HomeAside = () => {
  const style = useSelector((state) => state.themes.style);
  return (
    <StyledHomeAside className={style === "glass" ? "glass" : ""}>
      <AsideCard />
      <AsideMenu />
    </StyledHomeAside>
  );
};

export default HomeAside;
