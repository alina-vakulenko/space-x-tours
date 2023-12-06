import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import slideFirst from "../../assets/images/png/slide-1.png";
import slideSecond from "../../assets/images/png/slide-2.png";
import slideThird from "../../assets/images/png/slide-3.png";
import { FlexRow, CircleFilledIcon, CircleIcon } from "../../globalStyles";
import ScrollDownButton from "./ScrollDownButton";

const CarouselContainer = styled.div`
  width: 100%;
  height: 740px;
  position: relative;
  margin-bottom: 103px;
`;

const SlidesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const CarouselPagination = styled(FlexRow)`
  position: absolute;
  top: 413px;
  left: 640px;
  gap: 8px;

  button {
    background: transparent;
    border: none;
  }
`;

const CarouselSlide = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))<{ $active: boolean }>`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  transition: 0.5s ease-in-out;

  &.${(props) => (props.$active ? "active" : "")} {
    opacity: 1;
    transform: scale(1);
  }
`;

const BannerTitle = styled.h2<{ $fontSize?: string }>`
  color: var(--color-text-inverted);
  font-size: ${(props) => props.$fontSize || "48px"};
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

const SlideOverlay = styled.div`
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

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const slideRight = () => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    };

    timeout.current = autoPlay ? setTimeout(() => slideRight(), 2500) : null;

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

  const slides = [
    { id: 1, imagePath: slideFirst, description: "first" },
    { id: 2, imagePath: slideSecond, description: "second" },
    { id: 3, imagePath: slideThird, description: "third" },
  ] as const;

  return (
    <CarouselContainer
      onMouseEnter={onCarouselEnter}
      onMouseLeave={onCarouselLeave}
    >
      <SlidesWrapper>
        {slides.map((slide) => (
          <CarouselSlide
            key={slide.id}
            src={slide.imagePath}
            alt={slide.description}
            $active={currentSlide === slide.id}
          />
        ))}
      </SlidesWrapper>
      <SlideOverlay>
        <BannerTitle>The space is waiting for</BannerTitle>
        <BannerTitle $fontSize="310px">you</BannerTitle>
        <ScrollDownButton />
      </SlideOverlay>
      <CarouselPagination>
        {slides.map((slide) => (
          <button
            key={`btn-${slide.id}`}
            onClick={() => setCurrentSlide(slide.id)}
          >
            {slide.id === currentSlide ? <CircleFilledIcon /> : <CircleIcon />}
          </button>
        ))}
      </CarouselPagination>
    </CarouselContainer>
  );
};

export default Carousel;
