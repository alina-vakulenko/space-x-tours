import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexRow } from "../../globalStyles";

const NavList = styled(FlexRow)`
  gap: 32px;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-text-inverted);
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 70%;
  }

  &.active {
    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      content: "";
      height: 1px;
      width: 50px;
      background-color: var(--color-text-inverted);
    }
  }
`;

const HeaderNavigation = () => {
  return (
    <nav>
      <NavList as="ul">
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={""}>Tours</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={""}>About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={""}>Help</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default HeaderNavigation;
