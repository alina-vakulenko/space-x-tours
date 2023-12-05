import { NavLink } from "react-router-dom";
import logo from "../../assets/images/svg/logo.svg";

const HeaderLogo = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="SpaceX logo" />
    </NavLink>
  );
};

export default HeaderLogo;
