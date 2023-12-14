import styled from "styled-components";
import sprite from "../../assets/sprite.svg";
import { styledIconButton } from "../../globalStyles";

const StyledButton = styled.button`
  ${styledIconButton}

  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);
  }
`;

type DeleteButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <svg aria-hidden width={19} height={21}>
        <use href={sprite + "#delete"} />
      </svg>
    </StyledButton>
  );
};

export default DeleteButton;
