import { GoSearch } from "react-icons/go";
import { IEpisode } from "../../../../interfaces/index";
import CardEpisode from "../../Card/Episodes/CardEpisode";
import useFetch from "../../hooks/useFetch";
import * as S from "./EpisodesPage.style";
import { useState } from "react";
import * as Styled from "../CharactersPage/CharactersPage.style"
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";


const EpisodesPage = () => {
  const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {data: episodes} = useFetch<IEpisode>(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );

  const searchFepisode = episodes.filter((episode: IEpisode) => episode.name.toLocaleLowerCase().includes(
    searchValue.toLocaleLowerCase()
    ));


  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  function prevPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }


  return (
    <S.StyledEpisodesContainer>
       <Styled.Container> <Styled.SearchIcon onClick={() => toggleSearch()}>
            <GoSearch />
          </Styled.SearchIcon>
        <Styled.SearchContainer>
          {isOpen && (
            <
              Styled.SearchInput
              placeholder="Search"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
         
        </Styled.SearchContainer>
      </Styled.Container>
      <S.StyledEpisodesContainerInner>
        {searchFepisode.map((episode, id) => (
          <S.StyledEpisodes key={id}>
            <CardEpisode episode={episode} />
          </S.StyledEpisodes>
        ))}
      </S.StyledEpisodesContainerInner>
      <S.StyledPagination>
        <S.StyledButton onClick={prevPage} disabled={page === 1}>
          <HiOutlineArrowSmLeft />
          PREV
        </S.StyledButton>
        <S.StyledButton onClick={nextPage} disabled={page === 3}>
          NEXT
          <HiOutlineArrowSmRight />
        </S.StyledButton>
      </S.StyledPagination>
    </S.StyledEpisodesContainer>
  );
};

export default EpisodesPage;
