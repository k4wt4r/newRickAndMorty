import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  color: white;
  margin-right: 18px;
  display: inline-block;
`;

export const SearchInput = styled.input`
  border: 1px solid white;
  position: absolute;
  z-index: 10;
  background-color: transparent;
  height: 30px;
  width: 360px;
  border-radius: 5px;
  top: 0%;
  bottom: 2%;
  right: 100%;
  opacity: 0;
`;

export const SearchIcon = styled.div`
  margin-right: 12px;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background-color: #ffffff;
  border-radius: 2px;

  &:hover {
    background-color: #362e2e;
    color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
  }
`;
