import styled from "styled-components";
import BannerTextWrapper from "./BannerTextWrapper";
import ScrollDownButton from "./ScrollDownButton";

const BannerSection = styled.section<{ $imagePath: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  background-image: url(${(props) => props.$imagePath});
  background-color: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: -1;
  transform: translateX(100%);
  transition: 0.5s ease-in-out;

  &.active {
    transform: translateX(-100%);
  }
`;

const BannerTitle = styled.h2<{ $fontSize?: string }>`
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

const Banner = ({ imagePath }: { imagePath: string }) => {
  return (
    <BannerSection $imagePath={imagePath}>
      <BannerTextWrapper>
        <BannerTitle>The space is waiting for</BannerTitle>
        <BannerTitle $fontSize="310px">you</BannerTitle>
      </BannerTextWrapper>
      <ScrollDownButton />
    </BannerSection>
  );
};

export default Banner;
