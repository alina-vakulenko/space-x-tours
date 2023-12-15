import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeartIcon from "../../assets/svg/heart.svg?react";
import { FlexRow, styledIconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";

const HeaderSideMenu = styled(FlexRow)`
  gap: 12px;
`;

const StyledNavlink = styled(NavLink)`
  ${styledIconButton}

  &.active,
  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);
    svg > * {
      fill: var(--color-text-inverted);
    }
  }
`;

const HeaderMenu = () => {
  return (
    <HeaderSideMenu>
      <StyledNavlink to="favorites">
        <HeartIcon aria-hidden width={24} height={24} />
      </StyledNavlink>
      <PrimaryButton>sign in</PrimaryButton>
    </HeaderSideMenu>
  );
};

export default HeaderMenu;
