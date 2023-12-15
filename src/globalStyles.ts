import { styled, css } from "styled-components";

export const Container = styled.div`
  padding-inline: 80px;
  height: 800px;
`;

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
  width: 44px;
  height: 44px;
  padding: 10px;
  background-color: #ececec;
  transition: all 250ms ease-in-out;
  svg {
    stroke: var(--color-text-main);
    padding-block: 5px;
  }
  &:hover svg {
    transform: scale(1.1);
  }
`;

export const PositionedElement = styled.div<{
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $centerX?: boolean;
  $centerY?: boolean;
  $zIndex?: number;
}>`
  position: absolute;
  top: ${(props) =>
    props.$centerY ? "50%" : props.$top ? props.$top : "auto"};
  left: ${(props) =>
    props.$centerX ? "50%" : props.$left ? props.$left : "auto"};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "auto")};
  right: ${(props) => (props.$right ? props.$right : "auto")};
  transform: ${(props) =>
    props.$centerX || props.$centerY
      ? `translate(${props.$centerX ? "-50%" : 0}, ${
          props.$centerY ? "-50%" : 0
        })`
      : "none"};
  z-index: ${(props) => (props.$zIndex !== undefined ? props.$zIndex : "auto")};
`;

export const styledIconButton = css`
  border: none;
  background-color: hsl(0, 0%, 93%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
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
  font-weight: 800;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const CarouselSlidesWrapper = styled(FlexRow)<{ $gap?: string }>`
  width: 100%;
  height: 100%;
  gap: ${(props) => (props.$gap ? props.$gap : 0)};
  overflow: hidden;
`;
