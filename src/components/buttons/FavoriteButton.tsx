import styled from "styled-components";
import heartIcon from "../../assets/images/svg/heart.svg";
import { Button } from "../../globalStyles";

const StyledButton = styled(Button)`
  width: 53px;
  height: 53px;
  background-color: hsl(0, 0%, 93%);
  background-image: url(${heartIcon});
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.2s ease-in-out;

  &:active,
  &:hover {
    background-color: hsl(335, 71%, 54%);
    color: var(--color-text-inverted);
  }
`;

const FavoriteButton = () => {
  return <StyledButton title="Favorites"></StyledButton>;
};

export default FavoriteButton;
