import styled from "styled-components";
import { Button } from "../../globalStyles";
import CircleWithDotIcon from "../../assets/svg/circle-with-dot.svg?react";
import CircleIcon from "../../assets/svg/circle.svg?react";

const StyledButton = styled(Button)<{ $color: string }>`
  width: 1.67vw;
  aspect-ratio: 1:1;
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
          stroke="currentColor"
          fill="currentColor"
        />
      ) : (
        <CircleIcon stroke="currentColor" fill="transparent" />
      )}
    </StyledButton>
  );
};

export default DotButton;
