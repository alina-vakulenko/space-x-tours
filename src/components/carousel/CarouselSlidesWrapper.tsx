import { ReactNode } from "react";
import styled from "styled-components";
import { FlexRow } from "../../globalStyles";

const SlidesWrapper = styled(FlexRow)<{ $gap?: string }>`
  width: 100%;
  height: 100%;
  gap: ${(props) => (props.$gap ? props.$gap : 0)};
  overflow: hidden;
`;

type CarouselSlidesWrapperProps = {
  children: ReactNode;
  gap?: string;
};

const CarouselSlidesWrapper = ({
  children,
  gap,
}: CarouselSlidesWrapperProps) => {
  return <SlidesWrapper $gap={gap}>{children}</SlidesWrapper>;
};

export default CarouselSlidesWrapper;
