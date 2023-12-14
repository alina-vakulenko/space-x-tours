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
  disabled?: boolean;
};

const ForwardButton = ({ onClick, disabled = false }: ForwardButtonProps) => {
  return (
    <ArrowButtonRight onClick={onClick} disabled={disabled}>
      <svg aria-hidden width={10} height={16}>
        <use xlinkHref={sprite + "#arrow"} />
      </svg>
    </ArrowButtonRight>
  );
};

export default ForwardButton;
