import { FC } from "react";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import LocationsHeaderContent from "../HeaderContent/LocationsContent/LocationsHeaderContent";
import LocationsPage from "../pages/Locations/LocationsPage";

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header
        imgSrc="/images/rickAmorty.png"
        HeaderContent={LocationsHeaderContent}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
