import { FC } from "react";
import { useTheme } from '../theme/DarkMode';
import * as S from "./Navbar.style";
import {MdOutlineLightMode} from "react-icons/md"
const logo = require("./logo.png");

type Props = {
  navElements?: Array<{
    text?: string;
    link?: string;
    active?: boolean;
  }>;
};

const navelts = [
  {
    text: "Characters",
    link: "/",
  },
  {
    text: "Episodes",
    link: "/episode",
  },
  {
    text: "Locations",
    link: "/location",
  },
];

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.LogoImg src={logo} alt="Rick And Morty" />
    </S.LogoContainer>
  );
};

const renderNavElements = () => {
   
  return navelts.map((navElement, index) => {

    return (
      <S.NavElement key={index}>
        <S.StyledNavLink
          href={navElement.link}
          className={
            window.location.pathname === navElement.link ? "active" : ""
          }          
          
          
      
        >
          {navElement.text}
        </S.StyledNavLink>
      </S.NavElement>
    );
  });
};

const NavBar: FC<Props> = ({ navElements }) => {
  const { theme, toggleTheme } = useTheme();

 


  return (
    <S.StyledNavBar>
      <S.StyledContainer>
        <Logo />
        <S.NavBarElementConatiner>
          {renderNavElements()}
        </S.NavBarElementConatiner>
        <S.StyledContainerLight>
          <MdOutlineLightMode
            onClick={toggleTheme}
            style={{ border: "none", cursor: "pointer", color: "#FFFFFF" }}
          >
            {theme === "Light" ? "Dark" : "Light"}
          </MdOutlineLightMode>

           
        </S.StyledContainerLight>
      </S.StyledContainer>
    </S.StyledNavBar>
  );
};

export default NavBar;
