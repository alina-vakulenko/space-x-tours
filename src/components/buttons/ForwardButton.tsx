import { ArrowButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";
import styled from "styled-components";

const ArrowButtonRight = styled(ArrowButton)`
  svg {
    transform: rotate(180deg);
  }
`;

type ForwardButtonProps = {
  onClick: () => void;
};

const ForwardButton = ({ onClick }: ForwardButtonProps) => {
  return (
    <ArrowButtonRight onClick={onClick}>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#arrow"} />
      </svg>
    </ArrowButtonRight>
  );
};

export default ForwardButton;
