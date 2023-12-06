import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import slides from "../../assets/images";
import ScrollDownButton from "../buttons/ScrollDownButton";
import CarouselDotsPagination from "./CarouselDotsPagination";

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

type PositioningProps = {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
};

const PositionedElement = styled.div.attrs<PositioningProps>(
  ({ top, bottom, right, left }) => ({
    style: {
      top: top || "auto",
      bottom: bottom || "auto",
      right: right || "auto",
      left: left || "auto",
    },
  })
)`
  position: absolute;
`;

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function showNextSlide() {
      setSlideIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
    }

    timeout.current = autoPlay ? setTimeout(showNextSlide, 5000) : null;

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  });

  const onCarouselEnter = () => {
    setAutoPlay(false);
    timeout.current && clearTimeout(timeout.current);
  };

  const onCarouselLeave = () => {
    setAutoPlay(true);
  };

  return (
    <CarouselContainer
      onMouseEnter={onCarouselEnter}
      onMouseLeave={onCarouselLeave}
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
      <PositionedElement left="605px" bottom="33px">
        <ScrollDownButton />
      </PositionedElement>
      <PositionedElement top="413px" left="640px">
        <CarouselDotsPagination
          slidesCount={slides.length}
          activeSlideIndex={slideIndex}
          onClick={(index: number) => setSlideIndex(index)}
        />
      </PositionedElement>
      {/* <div id="slider-bottom" /> */}
    </CarouselContainer>
  );
};

export default Carousel;
