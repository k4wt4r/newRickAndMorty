import { IEpisode } from "../../../../interfaces/index";
import CardEpisode from "../../Card/Episodes/CardEpisode";
import useFetch from "../../hooks/useFetch";
import * as S from "./EpisodesPage.style";

type Props = {};

const EpisodesPage = (props: Props) => {
  const episode = useFetch<IEpisode>(
    "https://rickandmortyapi.com/api/episode/"
  );

  return (
    <S.StyledEpisodesContainer>
      <S.StyledEpisodesContainerInner>
        {episode.data.map((episode, id) => (
          <S.StyledEpisodes key={id}>
            <CardEpisode episode={episode} />
          </S.StyledEpisodes>
        ))}
      </S.StyledEpisodesContainerInner>
    </S.StyledEpisodesContainer>
  );
};

export default EpisodesPage;
