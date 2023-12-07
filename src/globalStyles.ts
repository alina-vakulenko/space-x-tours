import { styled, css } from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-text-button);
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const ArrowButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ececec;

  svg > * {
    padding: 5px 0px;
    margin: 0 auto;
  }
`;

export const PositionedElement = styled.div<{
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $centerX?: boolean;
  $centerY?: boolean;
}>`
  position: absolute;
  top: ${(props) =>
    props.$centerY ? "50%" : props.$top ? props.$top : "auto"};
  left: ${(props) =>
    props.$centerX ? "50%" : props.$left ? props.$left : "auto"};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "auto")};
  right: ${(props) => (props.$right ? props.$right : "auto")};
  transform: ${(props) =>
    `translate(${props.$centerX ? "-50%" : 0}, ${
      props.$centerY ? "-50%" : 0
    })`};
`;

export const styledIconButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 93%);
`;

export const IconButton = styled(Button)<{ $size?: "string" }>`
  width: ${(props) => (props.$size ? props.$size : "53px")};
  height: ${(props) => (props.$size ? props.$size : "53px")};
  ${styledIconButton}
  transition: all 0.2s ease-in-out;
`;

export const FullWidthImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const BannerTitle = styled.h2<{ $fontSize?: string }>`
  color: var(--color-text-inverted);
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;
