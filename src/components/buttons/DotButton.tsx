import styled from "styled-components";
import { Button } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

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

  svg > * {
    stroke: currentColor;
    fill: currentColor;
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
        <svg aria-hidden width={24} height={24}>
          <use href={sprite + "#circle-with-dot"} />
        </svg>
      ) : (
        <svg aria-hidden width={24} height={24}>
          <use href={sprite + "#circle"} />
        </svg>
      )}
    </StyledButton>
  );
};

export default DotButton;
