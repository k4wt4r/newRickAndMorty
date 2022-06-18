import CharactersHeaderContent from "../HeaderContent/CharactersContent/CharactersHeaderContent";
import { FC } from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
