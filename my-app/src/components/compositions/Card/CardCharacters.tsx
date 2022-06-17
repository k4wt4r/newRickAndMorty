import { ICharacter } from "@/src/interfaces";
import { FC } from "react";
import Gender from "../pages/CharactersPage/CharactersInfo/Gender/Gender";
import Status from "../pages/CharactersPage/CharactersInfo/Status/Status";
import * as S from "./Card.style";

interface Props {
  character: ICharacter;
}

const CardCharacters: FC<Props> = ({ character }) => {
  return (
    <S.StyledCard>
      <S.StyledContainer>
        <S.StyledSpecies>{character.species}</S.StyledSpecies>
        <S.StyledImage src={character.image} alt="Rick and Morty" />
        <S.StyledInfo>
          <S.StyledName>{character.name}</S.StyledName>
          <S.StyledDescription>
            <S.StyledStatus>
              <Status status={character.status} />
            </S.StyledStatus>
            <S.StyledGender>
              <Gender gender={character.gender} />
            </S.StyledGender>
          </S.StyledDescription>
        </S.StyledInfo>
      </S.StyledContainer>
    </S.StyledCard>
  );
};

export default CardCharacters;
