import { FC } from "react";
import * as S from "./CardLocation.style";
import { ILocation } from "@/src/interfaces";
import { HiLocationMarker } from "react-icons/hi";
import { TbDimensions } from "react-icons/tb";

interface IProps {
  location: ILocation;
}

const CardLocations: FC<IProps> = ({ location }) => {
  return (
    <S.StyledCardsContainer>
      <S.StyledCardsContainerInner>
        <S.StyledCard>
          <S.StyledBgImage
            src="https://i.pinimg.com/736x/db/f4/14/dbf414db62ac89e83cba1e8c6ff401a0.jpg"
            alt="Rick and Morty"
          />
          <S.StyledContainer>
            <S.StyledName>{location.name}</S.StyledName>
            <S.StyledType>
              <HiLocationMarker />
              {location.type}
            </S.StyledType>
            <S.StyledDescription>
              <S.StyledDimensions>
                <TbDimensions />
                {location.dimension}
              </S.StyledDimensions>
              <S.StyledCreated>{location.created}</S.StyledCreated>
            </S.StyledDescription>
          </S.StyledContainer>
        </S.StyledCard>
      </S.StyledCardsContainerInner>
    </S.StyledCardsContainer>
  );
};

export default CardLocations;
