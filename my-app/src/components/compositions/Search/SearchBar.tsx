import * as S from "./SearchBar.style";
import { GoSearch } from "react-icons/go";
import { FC } from "react";
//mport { useState } from "react";

type props = {
  isOpen?: boolean;
};

const SearchBar: FC<props> = ({ isOpen = false }) => {
  return (
    <S.SearchContainer>
      <S.SearchIcon>
        <GoSearch />
      </S.SearchIcon>
      <S.SearchInput placeholder="Search" type="text" />
    </S.SearchContainer>
  );
};

export default SearchBar;
