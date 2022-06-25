import React from "react";
import EpisodesPage from "../pages/Episodes/EpisodesPage";
import * as S from "./CardsContainer.style";
import LayoutEpisodes from "../Layout/LayoutEpisodes";

const LocationsContainer = () => {
  return (
    <LayoutEpisodes>
      <S.StyledCardsContainer>
        <S.StyledCardsContainerInner>
          <EpisodesPage />
        </S.StyledCardsContainerInner>
      </S.StyledCardsContainer>
    </LayoutEpisodes>
  );
};

export default LocationsContainer;
