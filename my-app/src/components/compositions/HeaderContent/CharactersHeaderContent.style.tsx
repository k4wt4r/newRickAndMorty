import styled from "styled-components";

export const StyledHeaderTextAndImage = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  position: relative;
`;

export const StyledHeaderText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 100px;

  @media (max-width: 990px) {
    max-width: 100%;
    padding: 20px;

  }
`;

export const StyleTitle = styled.h1`
  font-size: 52px;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 990px) {
    font-size: 32px;
  }
`;

export const StyledHeaderParag = styled.p`
  padding-top: 8px;
  font-size: 15px;
  color: #bcbcbc;
  font-weight: 400;

  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const StyledHeaderImage = styled.img`
  width: 50%;
  height: auto;
  margin-left: 20px;
  background-position: center;
  position: absolute;
  right: 0;
`;
