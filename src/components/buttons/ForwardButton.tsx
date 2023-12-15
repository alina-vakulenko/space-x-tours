import styled from "styled-components";
import { ArrowButton } from "../../globalStyles";
import ArrowLeftIcon from "../../assets/svg/arrow-left.svg?react";

const ArrowButtonRight = styled(ArrowButton)`
  svg {
    transform: rotate(180deg);
  }
  &:hover svg {
    transform: rotate(180deg) scale(1.1);
  }
`;

type ForwardButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const ForwardButton = ({ onClick, disabled = false }: ForwardButtonProps) => {
  return (
    <ArrowButtonRight onClick={onClick} disabled={disabled}>
      <ArrowLeftIcon aria-hidden width={24} height={24} />
    </ArrowButtonRight>
  );
};

export default ForwardButton;
