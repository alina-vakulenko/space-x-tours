import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../assets/logo.svg";

const Logo = styled.img`
  width: 229px;
  height: 42px;
`;

const HeaderLogo = () => {
  return (
    <NavLink to="/">
      <Logo src={logo} alt="SpaceX Logo" />
    </NavLink>
  );
};

export default HeaderLogo;
