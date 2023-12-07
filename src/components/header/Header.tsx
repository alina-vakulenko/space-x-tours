import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled(FlexRow)`
  position: absolute;
  inset: 0;
  height: 80px;
  padding-inline: 80px;
  justify-content: space-between;
  background-color: hsla(0, 0%, 12%, 0.48);
  z-index: 999;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
