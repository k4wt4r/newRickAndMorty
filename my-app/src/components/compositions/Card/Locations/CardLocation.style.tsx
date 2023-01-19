import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

export const StyledCardsContainerInner = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #0f0f0f;
  z-index: 1;
  border-radius: 30px;

    @media (max-width: 990px) {
    height: 360px;
    width: 100%;}
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 4px;
`;

export const StyledName = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  margin: 0;

  text-shadow: 0 0 2px #fff, 0 0 3px #0f0c0c, 0 0 1px #1a1717, 0 0 2px #84e9d7,
    0 0 2px #84e9d7, 0 0 12px #84e9d7, 0 0 12px #84e9d7, 0 0 12px #84e9d7;
`;

export const StyledDescription = styled.p`
  color: #fff;
  font-size: 14px;
`;

export const StyledType = styled.p`
  color: #fff;
`;

export const StyledDimensions = styled.p`
  background-color: #564444;
`;

export const StyledCreated = styled.p`
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const StyledBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(1px);
  position: relative;
  border-radius: 20px;
  opacity: 0.5;
`;
