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
  gap: 22px;
`;

export const StyledEpisodes = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StyledPagination = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: #1b1d24;
  color: white;
  font-size: 16px;
  width: 100px;
  height: 40px;
  outline: none !important;
  border: none;
  border-radius: 10px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    border: 1px solid #c9c9c9;
  }
`;
