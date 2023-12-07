import styled from "styled-components";
import slides from "../../assets/images";
import ScrollDownButton from "../buttons/ScrollDownButton";
import CarouselDotsPagination from "./CarouselDotsPagination";
import { useCarousel } from "../../hooks/useCarousel";
import { PositionedElement } from "../../globalStyles";

const CarouselContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlidesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const CarouselSlide = styled.img<{ $offsetIndex: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 0;
  translate: ${(props) => `${-100 * props.$offsetIndex}%`};
  transition: translate 2000ms ease-in-out;
`;

const BannerTitle = styled.h2<{ $fontSize?: string }>`
  color: var(--color-text-inverted);
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

const Carousel = () => {
  const { slideIndex, selectSlide, startAutoPlay, stopAutoPlay } = useCarousel({
    totalCarouselItems: slides.length,
    autoPlayOn: true,
  });

  return (
    <CarouselContainer
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      aria-label="Banner Slider"
    >
      {/* <a href="#slider-bottom" className="skip-link">
        Skip Image Slider Controls
      </a> */}
      <SlidesWrapper>
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.imagePath}
            src={slide.imagePath}
            alt={slide.alt}
            $offsetIndex={slideIndex}
            aria-hidden={index !== slideIndex}
          />
        ))}
      </SlidesWrapper>
      <PositionedElement top="232px" left="167px">
        <BannerTitle>The space is waiting for</BannerTitle>
        <BannerTitle $fontSize="310px">you</BannerTitle>
      </PositionedElement>
      <PositionedElement left="605px" bottom="33px">
        <ScrollDownButton />
      </PositionedElement>
      <PositionedElement top="413px" left="640px">
        <CarouselDotsPagination
          slidesCount={slides.length}
          activeSlideIndex={slideIndex}
          onClick={selectSlide}
        />
      </PositionedElement>
      {/* <div id="slider-bottom" /> */}
    </CarouselContainer>
  );
};

export default Carousel;
