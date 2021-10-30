import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledProfileContainer,
  StyledProfile,
  StyledCaption,
  StyledPhoto,
  StyledInfoContainer,
  StyledLinks,
  StyledIcon,
} from "./StyledAbout";

const About = () => {
  const theme = useSelector((state) => state.themes.theme);
  const style = useSelector((state) => state.themes.style);

  const handleClick = () => {
    Swal.fire({
      title: `Portfolio under construction`,
      text: `Thanks for support me! 💜`,
      imageUrl: "https://i.imgur.com/hY4kEI1.gif",
      imageAlt: "pokeball",
      width: 500,
      position: "top",
    });
  };

  return (
    <div>
      <NavBar />
      <StyledContent>
        <StyledTitle>Hi! Hope you enjoy my app! 😀 </StyledTitle>
        <StyledDescription>
          This is a academic project for the bootcamp{" "}
          <a
            href="https://soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoyHenry.{" "}
          </a>
          Made with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux{" "}
          </a>
          and{" "}
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StyledComponents.
          </a>
        </StyledDescription>

        <StyledProfileContainer>
          <StyledProfile>
            <StyledPhoto src="https://media-exp1.licdn.com/dms/image/C4E03AQFsjhxuWC-U7A/profile-displayphoto-shrink_800_800/0/1584546281744?e=1640822400&v=beta&t=KFV4TEiRcl_LaXnWrhlqY8vyuM-O9tNcHzIMqSwyzkA" />
            <StyledInfoContainer className={style === "glass" ? "glass" : ""}>
              <StyledCaption>Carlos Ramirez</StyledCaption>
              <StyledLinks>
                <a
                  href="https://www.linkedin.com/in/carlosramirezdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon src="https://api.iconify.design/logos:linkedin-icon.svg" />
                </a>
                <a
                  href="https://github.com/chakkyy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon
                    src={
                      theme === "light"
                        ? "https://api.iconify.design/akar-icons:github-fill.svg?color=black"
                        : "https://api.iconify.design/akar-icons:github-fill.svg?color=white"
                    }
                  />
                </a>
                <span onClick={handleClick}>
                  <StyledIcon
                    src={
                      theme === "light"
                        ? "https://api.iconify.design/dashicons:portfolio.svg?color=black"
                        : "https://api.iconify.design/dashicons:portfolio.svg?color=white"
                    }
                  />
                </span>
              </StyledLinks>
            </StyledInfoContainer>
          </StyledProfile>
        </StyledProfileContainer>
      </StyledContent>
    </div>
  );
};

export default About;
