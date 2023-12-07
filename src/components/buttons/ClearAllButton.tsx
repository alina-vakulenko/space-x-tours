import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #556b84;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  text-transform: lowercase;
  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }
`;

type ClearAllButtonProps = {
  onClick: () => void;
};

const ClearAllButton = ({ onClick }: ClearAllButtonProps) => {
  return <StyledButton onClick={onClick}>clear all</StyledButton>;
};

export default ClearAllButton;
