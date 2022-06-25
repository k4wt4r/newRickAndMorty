import * as S from "./SearchBar.style";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, FC } from "react";

const SearchBar: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <S.StyledLight>
      <S.lightIcon onClick={toggleDarkMode}>
        <MdOutlineLightMode />
      </S.lightIcon>
    </S.StyledLight>
  );
};

export default SearchBar;
