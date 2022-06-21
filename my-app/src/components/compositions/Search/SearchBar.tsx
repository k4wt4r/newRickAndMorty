import * as S from "./SearchBar.style";
import { GoSearch } from "react-icons/go";
import { useState, FC } from "react";

 

const SearchBar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.SearchContainer>
      {isOpen && (
        <S.SearchInput
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
      )}
      <S.SearchIcon onClick={() => toggleSearch()}>
        <GoSearch />
      </S.SearchIcon>
    </S.SearchContainer>
  );
};

export default SearchBar;
