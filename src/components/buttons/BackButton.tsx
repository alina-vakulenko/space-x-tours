import { ArrowButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

type BackButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const BackButton = ({ onClick, disabled = false }: BackButtonProps) => {
  return (
    <ArrowButton onClick={onClick} disabled={disabled}>
      <svg aria-hidden width={10} height={16}>
        <use xlinkHref={sprite + "#arrow"} />
      </svg>
    </ArrowButton>
  );
};

export default BackButton;
