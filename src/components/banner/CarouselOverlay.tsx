import styled from "styled-components";
import ScrollDownButton from "../buttons/ScrollDownButton";

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding-top: 232px;
  padding-left: 167px;
  background-color: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BannerTitle = styled.h2<{ $fontSize?: string }>`
  color: var(--color-text-inverted);
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

const CarouselOverlay = () => {
  return (
    <Overlay>
      <BannerTitle>The space is waiting for</BannerTitle>
      <BannerTitle $fontSize="310px">you</BannerTitle>
    </Overlay>
  );
};

export default CarouselOverlay;
