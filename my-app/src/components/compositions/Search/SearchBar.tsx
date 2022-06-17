import * as S from "./SearchBar.style";
import { GoSearch } from "react-icons/go";
import { useState, FC } from "react";

const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SearchContainer>
      {isOpen && <S.SearchInput placeholder="Search" type="text" />}
      <S.SearchIcon onClick={() => toggleSearch()}>
        <GoSearch />
      </S.SearchIcon>
    </S.SearchContainer>
  );
};

export default SearchBar;
