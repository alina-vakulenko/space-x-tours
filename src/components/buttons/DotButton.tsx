import styled from "styled-components";
import { Button } from "../../globalStyles";
import CircleWithDotIcon from "../../assets/svg/circle-with-dot.svg?react";
import CircleIcon from "../../assets/svg/circle.svg?react";

const StyledButton = styled(Button)<{ $color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: scale 100ms ease-in-out;
  color: ${(props) => props.$color};

  &:hover,
  &:focus-visible {
    scale: 1.2;
  }

  svg circle:nth-child(2) {
    fill: transparent;
  }
`;

type DotButtonProps = {
  active: boolean;
  onClick: () => void;
  color: string;
};

const DotButton = ({ active, onClick, color }: DotButtonProps) => {
  return (
    <StyledButton onClick={onClick} $color={color}>
      {active ? (
        <CircleWithDotIcon
          aria-hidden
          width={24}
          height={24}
          stroke="currentColor"
          fill="currentColor"
        />
      ) : (
        <CircleIcon
          aria-hidden
          width={24}
          height={24}
          stroke="currentColor"
          fill="transparent"
        />
      )}
    </StyledButton>
  );
};

export default DotButton;
