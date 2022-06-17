import styled from "styled-components";

export const StyledCharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 18px;
`;

export const StyledCardCharacters = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 30px;
`;

export const StyledPagination = styled.div`
  width: 380px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(215, 204, 204, 0.16);
  border-radius: 40px;
  padding: 20px;
`;

export const StyledButtonNext = styled.button`
  background-color: #1b1d24;
  color: #fffefe;
  border: 1px solid #c9c9c9;
  width: 90px;
  height: 30px;
  font-size: 16px;
  font-weight: 300;
`;
export const StylesButtonPrevious = styled.button`
  background-color: #1b1d24;
  color: #fffefe;
  border: 1px solid #c9c9c9;
  width: 90px;
  height: 30px;
  font-size: 16px;
  font-weight: 300;
`;

export const StyledPageNumber = styled.div`
  background-color: #fff;
  color: #1b1d24;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
