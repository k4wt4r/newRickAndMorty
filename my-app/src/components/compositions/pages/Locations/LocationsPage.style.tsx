import styled from "styled-components";

export const StyledLocationsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;
`;

export const StyledCardsContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 30px;
  background: #1b1d23;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(255, 253, 253, 0.23);
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledPagination = styled.div`
  margin: 40px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const StyledButtonNext = styled.button`
  background-color: #1b1d24;
  color: #fffefe;
  border: 1px solid #c9c9c9;
  width: 100px;
  height: 35px;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
export const StylesButtonPrevious = styled.button`
  background-color: #1b1d24;
  color: #fffefe;
  border: 1px solid #c9c9c9;
  width: 100px;
  height: 35px;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
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
