import { ICharacter } from "@/src/interfaces";
import { FC } from "react";
import * as S from "./Card.style";

interface Props {
  character: ICharacter;
}

const CardCharacters: FC<Props> = ({ character }) => {
  return (
    <S.StyledCard>
      <S.StyledContainer>
        <S.StyledImage src={character.image} alt="Rick and Morty" />
        <S.StyledInfo>
          <S.StyledTitle>{character.name}</S.StyledTitle>
          <S.StyledSpeciesAndStatus>
            <S.StyledDescription>{character.status}</S.StyledDescription>
            <S.StyledDescription>{character.species}</S.StyledDescription>
          </S.StyledSpeciesAndStatus>
        </S.StyledInfo>
      </S.StyledContainer>
    </S.StyledCard>
  );
};

export default CardCharacters;
