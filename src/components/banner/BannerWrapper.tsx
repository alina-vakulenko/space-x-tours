import { ReactNode } from "react";
import styled from "styled-components";

const BannerStyledWrapper = styled.div`
  maxwidth: inherit;
  width: "100%";
  height: "740px";
  position: relative;
`;

type BannerWrapperProps = {
  children: ReactNode;
};

const BannerWrapper = ({ children }: BannerWrapperProps) => {
  return <BannerStyledWrapper>{children}</BannerStyledWrapper>;
};

export default BannerWrapper;
