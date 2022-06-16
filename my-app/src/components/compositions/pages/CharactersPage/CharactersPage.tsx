import { ICharacter } from "@/src/interfaces";
import React, { useEffect, useState } from "react";
import CardCharacters from "../../Card/CardCharacters";
import * as S from "./CharactersPage.style";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      setCharacters(data.results);
    })();
  }, []);

  return (
    <S.StyledCharactersContainer>
      <S.StyledContainer>
        {characters.map((character, id) => (
          <S.StyledCardCharacters key={id}>
            <CardCharacters character={character} />
          </S.StyledCardCharacters>
        ))}
      </S.StyledContainer>
    </S.StyledCharactersContainer>
  );
};

export default CharactersPage;
