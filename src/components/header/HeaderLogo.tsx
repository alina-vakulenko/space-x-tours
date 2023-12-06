import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import sprite from "../../assets/sprite.svg";

const Logo = styled(NavLink)`
  width: 229px;
  height: 42px;
  background-color: lightgray;
  background-position: -33.663px -78.888px / 129.607% 468.914%;
  background-repeat: no-repeat;
  mix-blend-mode: difference;

  & > * {
    stroke: var(--color-text-main);
  }
`;

const HeaderLogo = () => {
  return (
    <Logo to="/" aria-label="Go to SpaceX Home Page">
      <svg aria-hidden width={229} height={42}>
        <use href={sprite + "#logo"} />
      </svg>
    </Logo>
  );
};

export default HeaderLogo;
