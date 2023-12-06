import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 232px;
  left: 167px;
  width: 1122px;
  height: 379px;
  color: var(--color-text-inverted);
`;

type BannerTextWrapper = {
  children: ReactNode;
};

const BannerTextWrapper = ({ children }: BannerTextWrapper) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BannerTextWrapper;
