import { ArrowButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

type BackButtonProps = {
  onClick: () => void;
};

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <ArrowButton onClick={onClick}>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#arrow"} />
      </svg>
    </ArrowButton>
  );
};

export default BackButton;
