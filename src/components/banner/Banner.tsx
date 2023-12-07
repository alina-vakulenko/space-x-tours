import images from "../../assets/images";
import { PositionedElement } from "../../globalStyles";
import BannerWrapper from "./BannerWrapper";
import BannerCarousel from "./BannerCarousel";
import BannerOverlay from "./BannerOverlay";
import ScrollDownButton from "../buttons/ScrollDownButton";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerCarousel images={images} />
      <BannerOverlay />
      <PositionedElement $left="605px" $bottom="33px">
        <ScrollDownButton />
      </PositionedElement>
    </BannerWrapper>
  );
};

export default Banner;
