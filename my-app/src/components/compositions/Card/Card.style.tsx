import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(42, 41, 41, 0.16);
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.3px);
  -webkit-backdrop-filter: blur(13.3px);
  border: 1px solid rgba(255, 255, 255, 0.38);
`;

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 360px;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
`;

export const StyledName = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const StyledDescription = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45px;
  height: 30px;
`;

export const StyledInfo = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

export const StyledSpeciesAndStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledStatus = styled.div`
  font-size: 18px;
`;

export const StyledGender = styled.div`
  font-size: 20px;
`;

export const StyledSpecies = styled.div`
  position: absolute;
  background-color: #25292e;
  backdrop-filter: blur(90px);
  border-radius: 30px;
  z-index: 1;
  font-size: 12px;
  top: 0;
  right: 0;
  padding: 8px 16px;
  margin: 8px;
  color: #f7f9fa;
  width: auto;
  height: auto;
`;
