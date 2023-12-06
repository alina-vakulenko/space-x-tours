import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import FavoriteButton from "../buttons/FavoriteButton";
import PrimaryButton from "../buttons/PrimaryButton";

const HeaderSideMenu = styled(FlexRow)`
  gap: 12px;
`;

const HeaderMenu = () => {
  return (
    <HeaderSideMenu>
      <FavoriteButton />
      <PrimaryButton>sign in</PrimaryButton>
    </HeaderSideMenu>
  );
};

export default HeaderMenu;
