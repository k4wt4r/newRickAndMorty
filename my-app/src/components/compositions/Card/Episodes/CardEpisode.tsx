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
        <S.StyledCardEpisodeImage>
          <S.StyledImg
            src="https://images.alphacoders.com/876/876589.jpg"
            alt={episode.name}
          />
          <S.StyledCardEpisodeInfo>
            <S.StyledEpisodeName>
              <S.StyledCardEpisodeInnerTitle>
                {episode.name}
              </S.StyledCardEpisodeInnerTitle>
              <S.StyledCardEpisodeInnerDescription>
                {episode.episode}
              </S.StyledCardEpisodeInnerDescription>
            </S.StyledEpisodeName>
            <S.StylesAirDate>{episode.air_date}</S.StylesAirDate>
          </S.StyledCardEpisodeInfo>
        </S.StyledCardEpisodeImage>
      </S.StyledCardEpisodeInner>
    </S.StyledCardEpisode>
  );
};

export default CardEpisode;
