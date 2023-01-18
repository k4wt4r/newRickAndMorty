import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: #14161c;
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarElementConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 100%;
  color: white;
`;

export const NavElement = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;

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

export const StyledContainerLight = styled.div``;


export const StyledNavLink = styled.a`

  color: white;
  text-decoration: none;

 &.active {
    
    color: #0ff;

  }
  
`