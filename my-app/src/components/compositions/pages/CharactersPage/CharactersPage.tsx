import { ICharacter } from "@/src/interfaces";
import React, { useEffect, useState } from "react";
import CardCharacters from "../../Card/CardCharacters";
import * as S from "./CharactersPage.style";
import { IoIosArrowBack } from "react-icons/io";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data.results);
    })();
  }, [api]);

  return (
    <>
      <S.StyledCharactersContainer>
        <S.StyledContainer>
          {characters.map((character, id) => (
            <S.StyledCardCharacters key={id}>
              <CardCharacters character={character} />
            </S.StyledCardCharacters>
          ))}
        </S.StyledContainer>
        <S.StyledPagination>
          <S.StylesButtonPrevious onClick={() => setPage(page - 1)}>
            <IoIosArrowBack />
            PREV
          </S.StylesButtonPrevious>
          <div>{page}</div>
          <S.StyledButtonNext onClick={() => setPage(page + 1)}>
            NEXT
          </S.StyledButtonNext>
        </S.StyledPagination>
      </S.StyledCharactersContainer>
    </>
  );
};

export default CharactersPage;
