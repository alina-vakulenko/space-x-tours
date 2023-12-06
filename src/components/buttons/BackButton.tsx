import { ArrowButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

const BackButton = () => {
  return (
    <ArrowButton>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#arrow"} />
      </svg>
    </ArrowButton>
  );
};

export default BackButton;
