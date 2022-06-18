import styled from "styled-components";

export const StyledLocationsContainer = styled.div`
  background-color: #af4545;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;
`;

export const StyledCardsContainer = styled.div`
  background-color: #298fae;
  // background-image: url("https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.rsquare.w700.jpg");
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 30px;
`;
