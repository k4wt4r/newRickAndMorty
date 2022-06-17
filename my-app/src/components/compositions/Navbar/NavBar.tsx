import { FC } from "react";
import SearchBar from "../Search/SearchBar";
import * as S from "./Navbar.style";
const logo = require("./logo.png");

type Props = {
  navElements?: Array<{
    text: string;
    link: string;
    active: boolean;
  }>;
};

const navelts = [
  {
    text: "Characters",
    link: "/",
    active: true,
  },
  {
    text: "Episodes",
    link: "/episodes",
    active: false,
  },
  {
    text: "Locations",
    link: "/locations",
    active: false,
  },
];

const Logo = () => (
  <S.LogoContainer>
    <S.LogoImg src={logo} alt="Rick And Morty" />
  </S.LogoContainer>
);

const renderNavElements = () => {
  return navelts.map((element) => <S.NavElement>{element.text}</S.NavElement>);
};

const NavBar: FC<Props> = ({ navElements }) => {
  return (
    <S.StyledNavBar>
      <S.StyledContainer>
        <Logo />
        <S.NavBarElementConatiner>
          {renderNavElements()}
        </S.NavBarElementConatiner>
        <SearchBar />
      </S.StyledContainer>
    </S.StyledNavBar>
  );
};

export default NavBar;
