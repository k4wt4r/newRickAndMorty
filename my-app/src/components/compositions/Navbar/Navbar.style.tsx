import styled from "styled-components";

export const StyledNavBar = styled.nav`
  height: 80px;
  width: 100vw;
  background-color: #14161c;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 990px) {
    height: 80px;
    width: 100%;
  }

`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: ){
    width: 100vw;
    display: flex;

  }
`;

export const NavBarElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 100%;
  color: white;
   @media (max-width: 990px){
    display: none;
 }
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
  }

  @media (max-width: 990px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;

  }
`;

export const LogoContainer = styled.div`
  width: 140px;
  height: 60%;
  display: flex;
  align-items: center;
  color: white;
  margin-left: 12px;

  @media (max-width: 990px){
    width: 100px;
    height: 60px;
    margin-left: 0px;
  }
`;

export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 990px){
    width: 100px;
    height: 40px;
    }
`;

export const StyledContainerLight = styled.div`
  @media (max-width: 900px){
    display: flex;
    width: 60px;
    justify-content: space-between;
    align-items: center;

  }
`;

export const StyledMenu = styled.div`
display: none;
   @media (max-width: 990px){  
    height: 60px;
    display: flex;   
    align-items: center;
    justify-content: center;
 }
`

export const StyledNavItems = styled.div`
  display: none;
@media (max-width: 900px){
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #14161c;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    justify-content: center;
    z-index: 100;
  }
`

export const StyledNavLink = styled.a`
  color: white;
  text-decoration: none;

 &.active {
    color: #0ff;
  }

  @media (max-width: 900px){
    display: flex;
    flex-direction: column;
  }
  
`
