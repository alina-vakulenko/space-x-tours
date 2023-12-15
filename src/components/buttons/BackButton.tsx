import { ArrowButton } from "../../globalStyles";
import ArrowLeftIcon from "../../assets/svg/arrow-left.svg?react";

type BackButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const BackButton = ({ onClick, disabled = false }: BackButtonProps) => {
  return (
    <ArrowButton onClick={onClick} disabled={disabled}>
      <ArrowLeftIcon aria-hidden width={24} height={24} />
    </ArrowButton>
  );
};

export default BackButton;
