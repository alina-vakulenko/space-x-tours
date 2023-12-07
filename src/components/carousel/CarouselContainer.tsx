import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

type CarouselContainerProps = {
  children: ReactNode;
  stopAutoPlay?: () => void;
  startAutoPlay?: () => void;
};

const CarouselContainer = ({
  children,
  stopAutoPlay,
  startAutoPlay,
}: CarouselContainerProps) => {
  return (
    <StyledSection onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
      {children}
    </StyledSection>
  );
};

export default CarouselContainer;
