import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled(FlexRow)`
  max-width: 1440px;
  height: 80px;
  padding-inline: 80px;
  justify-content: space-between;
  background-color: hsla(0, 0%, 12%, 0.48);
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
