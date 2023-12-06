import slideFirst from "../../assets/images/png/slide-1.png";
import slideSecond from "../../assets/images/png/slide-2.png";
import slideThird from "../../assets/images/png/slide-3.png";
import Carousel from "./Carousel";
import Banner from "./Banner";

const slides = [
  { imagePath: slideFirst, description: "first" },
  { imagePath: slideSecond, description: "second" },
  { imagePath: slideThird, description: "third" },
] as const;

const BannerCarousel = () => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Banner key={slide.description} imagePath={slide.imagePath} />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
