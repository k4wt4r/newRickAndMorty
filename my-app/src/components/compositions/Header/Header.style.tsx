import styled from "styled-components";

export const StyledHeaderSection = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px 0px;
`;

export const StyledHeaderTextAndImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledHeaderSectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-color: #14161c;
  margin: 20px;
`;

export const StyledHeaderImage = styled.img`
  width: 50%;
  height: auto;
  margin-left: 20px;
  background-position: center;
  position: absolute;
  right: 0;
  bottom: 0;
`;
