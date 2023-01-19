import { ICharacter } from "@/src/interfaces";
import React, { useState } from "react";
import CardCharacters from "../../Card/Characters/CardCharacters";
import useFetch from "../../hooks/useFetch";
import * as S from "./CharactersPage.style";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { GoSearch } from "react-icons/go";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const { data: characters } = useFetch<ICharacter>(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  console.log(characters);

  const searchCharacters = characters.filter((character: ICharacter) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <S.StyledCardsContainer>
      <S.Container> <S.SearchIcon onClick={() => toggleSearch()}>
            <GoSearch />
          </S.SearchIcon>
        <S.SearchContainer>
          {isOpen && (
            <S.SearchInput
              placeholder="Search by name"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
         
        </S.SearchContainer>
      </S.Container>
      <S.StyledCharactersContainer>
        <S.StyledContainer>
          {searchCharacters.map((character: ICharacter) => (
            <CardCharacters key={character.id} character={character} />
          ))}
        </S.StyledContainer>
        <S.StyledPagination>
          <S.StylesButtonPrevious
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <HiOutlineArrowSmLeft />
            PREV
          </S.StylesButtonPrevious>
          <S.StyledButtonNext
            onClick={() => setPage(page + 1)}
            disabled={page === 42}
          >
            NEXT
            <HiOutlineArrowSmRight />
          </S.StyledButtonNext>
        </S.StyledPagination>
      </S.StyledCharactersContainer>
    </S.StyledCardsContainer>
  );
};

export default CharactersPage;
