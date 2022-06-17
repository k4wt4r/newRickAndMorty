import { MdOutlineFemale, MdMale } from "react-icons/md";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { FC } from "react";
import * as S from "./Gender.style";

interface Props {
  gender: string;
}

const Gender: FC<Props> = ({ gender }) => {
  switch (gender) {
    case "Male":
      return (
        <S.StyledMaleIcon>
          <MdMale />
        </S.StyledMaleIcon>
      );
    case "Female":
      return (
        <S.StyledFemaleIcon>
          <MdOutlineFemale />
        </S.StyledFemaleIcon>
      );

    default:
      return (
        <S.StyledUnknownIcon>
          <AiOutlineFileUnknown />
        </S.StyledUnknownIcon>
      );
  }
};

export default Gender;
