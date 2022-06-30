import { ILocation } from "@/src/interfaces";
import { useState } from "react";
import CardLocations from "../../Card/Locations/CardLocations";
import useFetch from "../../hooks/useFetch";
import * as S from "./LocationsPage.style";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

type Props = {};

const LocationsPage = (props: Props) => {
  const [page, setPage] = useState(1);

  const locations = useFetch<ILocation>(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );

  return (
    <>
      <S.StyledLocationsContainer>
        <S.StyledContainer>
          {locations.data.map((location, id) => (
            <S.StyledCardsContainer key={id}>
              <CardLocations location={location} />
            </S.StyledCardsContainer>
          ))}
        </S.StyledContainer>
        <S.StyledPagination>
          <S.StylesButtonPrevious
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <HiOutlineArrowSmLeft />
            PREV
          </S.StylesButtonPrevious>
          {/* <S.StyledPageNumber>{page}</S.StyledPageNumber> */}
          <S.StyledButtonNext
            onClick={() => setPage(page + 1)}
            disabled={page === 7}
          >
            NEXT
            <HiOutlineArrowSmRight />
          </S.StyledButtonNext>
        </S.StyledPagination>
      </S.StyledLocationsContainer>
    </>
  );
};

export default LocationsPage;
