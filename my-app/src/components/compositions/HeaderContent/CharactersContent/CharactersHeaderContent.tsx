import { FC } from "react";
import * as S from "../CharactersHeaderContent.style";

const HeaderContent: FC = () => {
  return (
    <S.StyledHeaderText>
      <S.StyleTitle>Characters</S.StyleTitle>
      <S.StyledHeaderParag>
Rick and Morty is a popular animated series that follows the adventures of an eccentric scientist named Rick and his timid grandson Morty.
 Together, they travel to different dimensions and encounter strange and often dangerous creatures. The show is known for its dark humor, satirical commentary, and mind-bending plot twists. It's a must-watch for fans of science fiction and adult animation.
      </S.StyledHeaderParag>
    </S.StyledHeaderText>
  );
};

export default HeaderContent;
