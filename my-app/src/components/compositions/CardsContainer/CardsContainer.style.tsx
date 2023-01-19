import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledCardsContainerInner = styled.div`
  width: 80%;
  height: 100%;
  margin-bottom: 80px;
  background-color: #25292e;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 990px) {
    width: 90%;
    margin-bottom: 0;
  }
`;
