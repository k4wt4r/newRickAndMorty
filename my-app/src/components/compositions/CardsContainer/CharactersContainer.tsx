// import Card from "../Card/Card";
import { FC } from "react";
import LayoutCharacters from "../Layout/LayoutCharacters";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import * as S from "./CardsContainer.style";

const CardsContainer: FC = () => {
  return (
    <LayoutCharacters>
      <S.StyledCardsContainer>
        <S.StyledCardsContainerInner>
          <CharactersPage />
        </S.StyledCardsContainerInner>
      </S.StyledCardsContainer>
    </LayoutCharacters>
  );
};

export default CardsContainer;
