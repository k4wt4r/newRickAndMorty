// import Card from "../Card/Card";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import * as S from "./CardsContainer.style";

type Props = {};

const CardsContainer = (props: Props) => {
  return (
    <S.StyledCardsContainer>
      <S.StyledCardsContainerInner>
        <CharactersPage />
      </S.StyledCardsContainerInner>
    </S.StyledCardsContainer>
  );
};

export default CardsContainer;
