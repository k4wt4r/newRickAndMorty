import React from "react";
import LayoutLocations from "../Layout/LayoutLocations";
import LocationsPage from "../pages/Locations/LocationsPage";
import * as S from "./CardsContainer.style";

const LocationsContainer = () => {
  return (
    <LayoutLocations>
      <S.StyledCardsContainer>
        <S.StyledCardsContainerInner>
          <LocationsPage />
        </S.StyledCardsContainerInner>
      </S.StyledCardsContainer>
    </LayoutLocations>
  );
};

export default LocationsContainer;
