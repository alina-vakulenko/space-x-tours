import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, FlexRow } from "../../globalStyles";
import heartIcon from "../../assets/images/svg/heart.svg";

const HeaderSideMenu = styled(FlexRow)`
  gap: 12px;
`;

const FavoriteButton = styled(NavLink)`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 93%);

  &:active {
    background-color: hsl(335, 71%, 54%);
    color: var(--color-text-inverted);
  }
`;

const SignInButton = styled(Button)`
  text-transform: uppercase;
  padding: 12px 0;
  width: 163px;
  background-color: hsl(209, 100%, 91%);
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;
const HeaderMenu = () => {
  return (
    <HeaderSideMenu>
      <FavoriteButton to="favorites">
        <img src={heartIcon} alt="favorites" />
      </FavoriteButton>
      <SignInButton>sign in</SignInButton>
    </HeaderSideMenu>
  );
};

export default HeaderMenu;
