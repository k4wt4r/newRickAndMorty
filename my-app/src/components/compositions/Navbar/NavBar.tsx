import { FC } from "react";
import * as S from "./Navbar.style";

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
  <S.Logo>
    <LogoImg
      src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png"
      alt="Rick and Morty"
    />
  </S.Logo>
);

const renderNavElements = () => {
  return navelts.map((element) => <S.NavElement>{element.text}</S.NavElement>);
};

const NavBar: FC<Props> = ({ navElements }) => {
  return (
    <S.StyledNavBar>
      <Logo />
      {renderNavElements()}
    </S.StyledNavBar>
  );
};

export default NavBar;
