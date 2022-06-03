import { ElementType, FC } from "react";
import * as S from "./Header.style";

type Props = {
  imgSrc?: string;
  HeaderContent?: ElementType | null;
};

const Header: FC<Props> = ({ imgSrc, HeaderContent }) => {
  return (
    <S.StyledHeaderSection>
      <S.StyledHeaderSectionContainer>
        <S.StyledHeaderTextAndImage>
          <>
            {HeaderContent && <HeaderContent />}
            <S.StyledHeaderImage src={imgSrc} alt="Rick And Morty" />
          </>
        </S.StyledHeaderTextAndImage>
      </S.StyledHeaderSectionContainer>
    </S.StyledHeaderSection>
  );
};

export default Header;
