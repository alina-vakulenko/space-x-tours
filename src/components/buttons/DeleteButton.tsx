import styled from "styled-components";
import { IconButton } from "../../globalStyles";
import sprite from "../../assets/sprite.svg";

const StyledButton = styled(IconButton)`
  transition: all 0.2s ease-in-out;

  &:active,
  &:hover,
  &:focus-visible {
    background-color: hsl(335, 71%, 54%);
  }
`;

const DeleteButton = () => {
  return (
    <StyledButton>
      <svg aria-hidden width={24} height={24}>
        <use href={sprite + "#delete"} />
      </svg>
    </StyledButton>
  );
};

export default DeleteButton;