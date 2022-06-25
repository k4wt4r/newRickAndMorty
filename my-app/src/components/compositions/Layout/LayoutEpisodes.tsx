import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import { FC } from "react";
import EpisodesHeaderContent from "../HeaderContent/EpisodesContent/EpisodesHeaderContent";

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header
        imgSrc="/images/rickAmorty.png"
        HeaderContent={EpisodesHeaderContent}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
