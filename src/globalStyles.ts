import { styled } from "styled-components";

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

type PositioningProps = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
};

export const PositionedElement = styled.div.attrs<PositioningProps>(
  ({ top, bottom, right, left }) => ({
    style: {
      top: top || "auto",
      bottom: bottom || "auto",
      right: right || "auto",
      left: left || "auto",
    },
  })
)<{ $centerX?: boolean; $centerY?: boolean }>`
  position: absolute;
  top: ${(props) => (props.$centerY ? "50%" : 0)};
  left: ${(props) => (props.$centerX ? "50%" : 0)};
  transform: ${(props) =>
    `translate(${props.$centerX ? "-50%" : 0}, ${
      props.$centerY ? "-50%" : 0
    })`};
`;

export const IconButton = styled(Button)<{ $size?: "string" }>`
  width: ${(props) => (props.$size ? props.$size : "53px")};
  height: ${(props) => (props.$size ? props.$size : "53px")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 93%);
  transition: all 0.2s ease-in-out;
`;

export const FullWidthImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 0;
`;
