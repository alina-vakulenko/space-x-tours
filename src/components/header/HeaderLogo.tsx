import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg?react";

const HeaderLogo = () => {
  return (
    <NavLink to="/">
      <Logo width={229} height={42} />
    </NavLink>
  );
};

export default HeaderLogo;
