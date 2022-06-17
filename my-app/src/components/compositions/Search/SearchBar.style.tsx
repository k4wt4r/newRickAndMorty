import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: blueviolet;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  width: 120px;
`;

export const SearchInput = styled.input`
  position: absolute;
  background-color: transparent;
  width: 400px;
  height: 36px;
  top: 2;
  right: 0;
  outline: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 30px;
`;

export const SearchIcon = styled.button`
  position: absolute;
  right: 0;
  left: 90px;
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #141313;
  background-color: #ffffff;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchBarInput = styled.div`
  background-color: transparent;
  position: relative;
  width: 76%;
  height: 100%;
  border: none;
`;
