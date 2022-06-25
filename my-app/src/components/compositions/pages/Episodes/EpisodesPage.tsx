import { IEpisode } from "../../../../interfaces/index";
import CardEpisode from "../../Card/Episodes/CardEpisode";
import useFetch from "../../hooks/useFetch";
import * as S from "./EpisodesPage.style";
import { useState } from "react";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

type Props = {};

const EpisodesPage = (props: Props) => {
  const [page, setPage] = useState(1);
  const episode = useFetch<IEpisode>(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );

  function prevPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

  return (
    <S.StyledEpisodesContainer>
      <S.StyledEpisodesContainerInner>
        {episode.data.map((episode, id) => (
          <S.StyledEpisodes key={id}>
            <CardEpisode episode={episode} />
          </S.StyledEpisodes>
        ))}
      </S.StyledEpisodesContainerInner>
      <S.StyledPagination>
        <S.StylesButtonPrevious onClick={prevPage} disabled={page === 1}>
          <HiOutlineArrowSmLeft />
          PREV
        </S.StylesButtonPrevious>
        <S.StyledButtonNext onClick={nextPage} disabled={page === 3}>
          NEXT
          <HiOutlineArrowSmRight />
        </S.StyledButtonNext>
      </S.StyledPagination>
    </S.StyledEpisodesContainer>
  );
};

export default EpisodesPage;
