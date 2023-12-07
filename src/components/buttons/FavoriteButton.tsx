import styled from "styled-components";
import { IconButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

const StyledButton = styled(IconButton)`
  transition: all 0.2s ease-in-out;

  &:active,
  &:hover,
  &:focus-visible {
    background-color: hsl(335, 71%, 54%);
    svg {
      fill: var(--color-text-inverted);
    }
  }
`;

type FavoriteButtonProps = {
  onClick: () => void;
};

const FavoriteButton = ({ onClick }: FavoriteButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#heart"} />
      </svg>
    </StyledButton>
  );
};

export default FavoriteButton;
