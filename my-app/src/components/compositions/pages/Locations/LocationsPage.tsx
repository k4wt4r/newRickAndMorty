import { ILocation } from "@/src/interfaces";
import { useState } from "react";
import CardLocations from "../../Card/Locations/CardLocations";
import useFetch from "../../hooks/useFetch";
import * as S from "./LocationsPage.style";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import * as Styled from "../CharactersPage/CharactersPage.style";
import { GoSearch } from "react-icons/go";

type Props = {};

const LocationsPage = (props: Props) => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: locations } = useFetch<ILocation>(
    `https://rickandmortyapi.com/api/location/?page=${page}`
  );

  const searchFlocations = locations.filter((location: ILocation) =>
    location.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.StyledLocationsContainer>
        <Styled.Container>
          <Styled.SearchIcon onClick={() => toggleSearch()}>
            <GoSearch />
          </Styled.SearchIcon>
          <Styled.SearchContainer>
            {isOpen && (
              <Styled.SearchInput
                placeholder="Search"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          </Styled.SearchContainer>
        </Styled.Container>
        <S.StyledContainer>
          {searchFlocations.map((location, id) => (
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
