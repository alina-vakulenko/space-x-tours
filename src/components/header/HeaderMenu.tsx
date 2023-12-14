import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexRow, styledIconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";
import sprite from "../../assets/sprite.svg";

const HeaderSideMenu = styled(FlexRow)`
  gap: 12px;
`;

const StyledNavlink = styled(NavLink)`
  ${styledIconButton}

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
        <svg aria-hidden width={21} height={19}>
          <use href={sprite + "#heart"} />
        </svg>
      </StyledNavlink>
      <PrimaryButton>sign in</PrimaryButton>
    </HeaderSideMenu>
  );
};

export default HeaderMenu;
