import { ICharacter } from "@/src/interfaces";
import React, { useState } from "react";
import CardCharacters from "../../Card/CardCharacters";
import useFetch from "../../hooks/useFetch";
import * as S from "./CharactersPage.style";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const characters = useFetch<ICharacter>(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  console.log(characters);

  return (
    <>
      <S.StyledCharactersContainer>
        <S.StyledContainer>
          {characters.data.map((character, id) => (
            <S.StyledCardCharacters key={id}>
              <CardCharacters character={character} />
            </S.StyledCardCharacters>
          ))}
        </S.StyledContainer>
        <S.StyledPagination>
          <S.StylesButtonPrevious onClick={() => setPage(page - 1)}>
            PREV
          </S.StylesButtonPrevious>
          {/* <S.StyledPageNumber>{page}</S.StyledPageNumber> */}
          <S.StyledButtonNext onClick={() => setPage(page + 1)}>
            NEXT
          </S.StyledButtonNext>
        </S.StyledPagination>
      </S.StyledCharactersContainer>
    </>
  );
};

export default CharactersPage;
