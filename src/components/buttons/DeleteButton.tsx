import styled from "styled-components";
import DeleteIcon from "../../assets/svg/delete.svg?react";
import { styledIconButton } from "../../globalStyles";

const StyledButton = styled.button`
  ${styledIconButton}

  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);

    svg > * {
      stroke: var(--color-text-inverted);
    }
  }
`;

type DeleteButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <DeleteIcon aria-hidden width={24} height={24} />
    </StyledButton>
  );
};

export default DeleteButton;
