import { FC } from "react";
import * as S from "../CharactersHeaderContent.style";

const HeaderContent: FC = () => {
  return (
    <S.StyledHeaderText>
      <S.StyleTitle>Characters</S.StyleTitle>
      <S.StyledHeaderParag>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </S.StyledHeaderParag>
    </S.StyledHeaderText>
  );
};

export default HeaderContent;
