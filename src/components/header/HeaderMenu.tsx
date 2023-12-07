import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexRow, styledIconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";
import sprite from "../../assets/sprite.svg";

const HeaderSideMenu = styled(FlexRow)`
  gap: 12px;
`;

const StyledNavlink = styled(NavLink)`
  transition: all 0.2s ease-in-out;
  ${styledIconButton}
  width:53px;
  height: 53px;

  &.active,
  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);
    svg {
      fill: var(--color-text-inverted);
    }
  }
`;

const HeaderMenu = () => {
  return (
    <HeaderSideMenu>
      <StyledNavlink to="favorites">
        <svg aria-hidden width={24} height={24}>
          <use href={sprite + "#heart"} />
        </svg>
      </StyledNavlink>
      <PrimaryButton>sign in</PrimaryButton>
    </HeaderSideMenu>
  );
};

export default HeaderMenu;
