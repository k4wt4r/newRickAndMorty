import { FC } from "react";
import * as S from "./CardLocation.style";
import { ILocation } from "@/src/interfaces";

interface IProps {
  location: ILocation;
}

const CardLocations: FC<IProps> = ({ location }) => {
  return (
    <S.StyledCardsContainer>
      <S.StyledCardsContainerInner>
        <S.StyledCard>
          <S.StyledContainer>
            <S.StyledName>{location.name}</S.StyledName>
            <S.StyledDescription>
              <S.StyledType>{location.type}</S.StyledType>
              <S.StyledDimensions>{location.dimension}</S.StyledDimensions>
              <S.StyledCreated>{location.created}</S.StyledCreated>
            </S.StyledDescription>
          </S.StyledContainer>
        </S.StyledCard>
      </S.StyledCardsContainerInner>
    </S.StyledCardsContainer>
  );
};

export default CardLocations;
