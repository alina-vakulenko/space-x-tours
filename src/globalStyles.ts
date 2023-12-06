import { styled } from "styled-components";
import arrowDownIcon from "./assets/images/svg/arrow-down.svg";
import arrowIcon from "./assets/images/svg/arrow.svg";
import circleIcon from "./assets/images/svg/circle.svg";
import circleFilledIcon from "./assets/images/svg/circle-filled.svg";

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

export const ArrowDownIcon = styled.img.attrs(({ alt }) => ({
  src: arrowDownIcon,
  alt: alt,
}))`
  width: 40px;
  height: 40px;
`;

export const ArrowLeftIcon = styled.img.attrs(({ alt }) => ({
  src: arrowIcon,
  alt: alt,
}))`
  width: 24px;
  height: 24px;
`;

export const ArrowRightIcon = styled(ArrowLeftIcon)`
  transform: rotate(180deg);
`;

export const CircleIcon = styled.img.attrs(({ alt }) => ({
  src: circleIcon,
  alt: alt,
}))`
  width: 24px;
  height: 24px;
`;

export const CircleFilledIcon = styled.img.attrs(({ alt }) => ({
  src: circleFilledIcon,
  alt: alt,
}))`
  width: 24px;
  height: 24px;
`;
