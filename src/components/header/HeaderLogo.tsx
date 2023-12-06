import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../assets/images/svg/logo.svg";

const Logo = styled(NavLink)`
  width: 229px;
  height: 42px;
  background-image: url(${logo});
  background-color: lightgray;
  background-position: -33.663px -78.888px / 129.607% 468.914%;
  background-repeat: no-repeat;
  mix-blend-mode: difference;
`;

const HeaderLogo = () => {
  return <Logo to="/"></Logo>;
};

export default HeaderLogo;
