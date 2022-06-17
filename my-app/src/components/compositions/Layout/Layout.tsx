import CharactersHeaderContent from "../pages/HeaderContent/CharactersHeaderContent";
import { FC } from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import CardsContainer from "../CardsContainer/CardsContainer";

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header
        imgSrc="/images/rickAmorty.png"
        HeaderContent={CharactersHeaderContent}
      />
      {children}
    </>
  );
};

export default Layout;
