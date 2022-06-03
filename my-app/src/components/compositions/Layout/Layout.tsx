import NavBar from "@/components/compositions/Navbar/NavBar";
import Header from "@/components/compositions/Header/Header";
import CharactersHeaderContent from "@/components/compositions/pages/CharactersPage/HeaderContent/CharactersHeaderContent";
import { FC } from "react";

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
