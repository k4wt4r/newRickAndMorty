import styled from "styled-components";

export const StyledCardEpisode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
`;

export const StyledCardEpisodeInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledCardEpisodeInnerDescription = styled.div`
  background-color: #2a2d2d;
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const StyledCardEpisodeInnerTitle = styled.div`
  font-size: 24px;
  width: 60%;
  background: linear-gradient(to right, #e4e984 0%, #30cfd0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledCardEpisodeImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  background-color: #25292e;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0.5px);
  opacity: 0.6;
  border-radius: 30px;
  background-position: left;
`;

export const StyledCardEpisodeInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  padding: 12px;
`;

export const StylesAirDate = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const StyledEpisodeName = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
