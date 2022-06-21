import { IEpisode } from "@/src/interfaces";
import { FC } from "react";
import * as S from "./CardEpisode.style";

type Props = {
  episode: IEpisode;
};

const CardEpisode: FC<Props> = ({ episode }) => {
  return (
    <S.StyledCardEpisode>
      <S.StyledCardEpisodeInner>
        <S.StyledCardEpisodeInnerTitle>
          {episode.name}
        </S.StyledCardEpisodeInnerTitle>
        <S.StyledCardEpisodeInnerDescription>
          {episode.episode}
        </S.StyledCardEpisodeInnerDescription>
      </S.StyledCardEpisodeInner>
    </S.StyledCardEpisode>
  );
};

export default CardEpisode;
