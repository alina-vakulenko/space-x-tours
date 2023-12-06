import styled from "styled-components";
import { Button } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

const StyledButton = styled(Button)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: scale 100ms ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.2;
  }

  & > * {
    stroke: var(--color-text-inverted);
    fill: transparent;
  }
`;

type DotButtonProps = {
  active: boolean;
  onClick: () => void;
};

const DotButton = ({ active, onClick }: DotButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
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
