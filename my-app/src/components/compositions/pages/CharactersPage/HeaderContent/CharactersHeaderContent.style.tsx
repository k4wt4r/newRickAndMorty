import styled from "styled-components";

export const StyledHeaderTextAndImage = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  position: relative;
`;

export const StyledHeaderText = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 100px;
`;

export const StyleTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
`;

export const StyledHeaderParag = styled.p`
  padding-top: 8px;
  font-size: 16px;
  color: #9f9e9e;
  font-weight: 400;
`;

export const StyledHeaderImage = styled.img`
  width: 50%;
  height: auto;
  margin-left: 20px;
  background-position: center;
  position: absolute;
  right: 0;
`;
