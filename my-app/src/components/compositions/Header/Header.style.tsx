import styled, { keyframes } from "styled-components";

const flicker = keyframes`
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		opacity: .99;
		text-shadow: -1px -1px 0 $outline, 1px -1px 0 $outline, -1px 1px 0 $outline, 1px 1px 0 $outline, 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
		text-shadow: none;
	}
`;

export const StyledHeaderSection = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 44px 0px;
  position: relative;
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

  ::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 100%;
    border-radius: 30px;
    box-shadow: 1px 0px 18px 2px #0ff;
    animation: ${flicker} 3s linear infinite;
  }
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
