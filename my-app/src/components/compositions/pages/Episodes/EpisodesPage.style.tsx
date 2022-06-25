import styled from "styled-components";

export const StyledEpisodesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledEpisodesContainerInner = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

export const StyledEpisodes = styled.div`
  width: 360px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledPagination = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const StylesButtonPrevious = styled.button`
  background-color: #1b1d24;
  color: white;
  font-size: 16px;
  width: 100px;
  height: 40px;
  outline: none !important;
`;

export const StyledButtonNext = styled.button`
  background-color: #1b1d24;
  color: white;
  font-size: 16px;
`;
