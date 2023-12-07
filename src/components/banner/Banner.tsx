import styled from "styled-components";
import images from "../../assets/images";
import { PositionedElement } from "../../globalStyles";
import BannerWrapper from "./BannerWrapper";
import ScrollDownButton from "../buttons/ScrollDownButton";
import BannerCarousel from "../BannerCarousel";

const BannerTitle = styled.h2<{ $fontSize?: string }>`
  color: var(--color-text-inverted);
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerCarousel images={images} />
      <PositionedElement bottom="129px" left="167px">
        <BannerTitle>The space is waiting for</BannerTitle>
        <BannerTitle $fontSize="310px">you</BannerTitle>
      </PositionedElement>
      <PositionedElement left="605px" bottom="33px">
        <ScrollDownButton />
      </PositionedElement>
    </BannerWrapper>
  );
};

export default Banner;
