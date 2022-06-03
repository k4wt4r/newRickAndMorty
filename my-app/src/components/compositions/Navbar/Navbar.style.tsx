import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: #14161c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const NavBarElementConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  color: white;
`;

export const NavElement = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
    color: greenyellow;
  }
`;

export const LogoContainer = styled.div`
  width: 140px;
  height: 60%;
  display: flex;
  align-items: center;
  color: white;
  margin-left: 12px;
`;

export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
