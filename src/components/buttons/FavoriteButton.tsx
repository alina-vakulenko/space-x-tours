import styled from "styled-components";
import { Button } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

const StyledButton = styled(Button)`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 93%);
  transition: background-color 0.2s ease-in-out, fill 0.2s ease-in-out;

  &:active,
  &:hover,
  &:focus-visible {
    background-color: hsl(335, 71%, 54%);
    & > * {
      fill: var(--color-text-inverted);
    }
  }
`;

const FavoriteButton = () => {
  return (
    <StyledButton>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#heart"} />
      </svg>
    </StyledButton>
  );
};

export default FavoriteButton;
