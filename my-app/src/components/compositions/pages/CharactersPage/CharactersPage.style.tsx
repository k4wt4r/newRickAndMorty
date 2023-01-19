import styled from "styled-components";

export const StyledCharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px;

  @media (max-width: 990px) {
    padding: 8px;
    /* height: auto; */
    padding: 10px;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr ;

 
  }
`;

export const StyledCardCharacters = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 30px;
`;

export const StyledPagination = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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

export const Container = styled.div`
  width: 96%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;

  position: relative;

  @media (max-width: 990px) {
    width: 100%;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
   
  }
 
`;

export const SearchContainer = styled.div`
  position: relative;
  color: white;
  display: flex;
  align-items: flex-end;
  width: 120px;
  height: 60px;

  @media (max-width: 990px) {
    width: 96%;;
    align-items: flex-start;
  }

`;

export const SearchInput = styled.input`
  position: absolute;
  background-color: transparent;
  width: 400px;
  height: 50px;
  top: 2;
  right: 0;
  outline: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 30px;
  border: 0.5px solid #ffffff;


  @media (max-width: 990px) {
    width: 100%;
    left: 0;
    right: 0;  
    align-items: center;
    justify-content: center;
    text-indent: 36px;
  }

  &:focus {
    outline: 0;
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  right: 10;
  bottom: 0;
  border: 0.5px solid #ffffff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #141313;
  font-size: 18px;
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;

  @media (max-width: 990px) {
    left: 0;
    bottom: 0;
    top: 0;
   
  }
`;

export const SearchBarInput = styled.div`
  background-color: transparent;
  position: relative;
  width: 76%;
  height: 100%;
  border: none;

  @media (max-width: 990px) {
   
  }
`;

export const StyledCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  @media (max-width: 990px) {
    width: 100%;
    /* height: 100%; */
  }
`
