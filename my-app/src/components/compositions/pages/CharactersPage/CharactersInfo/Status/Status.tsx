import { FC } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";
import { MdOutlineBatteryUnknown } from "react-icons/md";
import * as S from "./Status.style";

interface Props {
  status: string;
}

const Status: FC<Props> = ({ status }) => {
  switch (status) {
    case "Dead":
      return (
        <S.StyledDeadStatus>
          <FaWindowClose />
        </S.StyledDeadStatus>
      );

    case "Alive":
      return (
        <S.StyledAliveStatus>
          <GiLifeBar />
        </S.StyledAliveStatus>
      );
    default:
      return (
        <S.StyledUnknownStatus>
          <MdOutlineBatteryUnknown />
        </S.StyledUnknownStatus>
      );
  }
};

export default Status;
