import styled from "styled-components";
import { FullWidthImage, PositionedElement } from "../../globalStyles";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselDotsPagination from "../carousel/CarouselDotsPagination";
import CarouselSlidesWrapper from "../carousel/CarouselSlidesWrapper";
import CarouselContainer from "../carousel/CarouselContainer";

const CarouselSlide = styled(FullWidthImage)<{ $offsetIndex: number }>`
  translate: ${(props) => `${-100 * props.$offsetIndex}%`};

  @media not (prefers-reduced-motion: reduce) {
    transition: translate 2000ms ease-in-out;
  }
`;

type BannerCarouselProps = {
  images: { imagePath: string; alt: string }[];
};

const BannerCarousel = ({ images }: BannerCarouselProps) => {
  const { slideIndex, selectSlide, startAutoPlay, stopAutoPlay } = useCarousel({
    totalCarouselItems: images.length,
    autoPlayOn: true,
  });

  return (
    <CarouselContainer
      startAutoPlay={startAutoPlay}
      stopAutoPlay={stopAutoPlay}
    >
      <CarouselSlidesWrapper>
        {images.map((image, index) => (
          <CarouselSlide
            key={image.imagePath}
            src={image.imagePath}
            alt={image.alt}
            $offsetIndex={slideIndex}
            aria-hidden={index !== slideIndex}
          />
        ))}
      </CarouselSlidesWrapper>

      <PositionedElement $top="413px" $left="640px">
        <CarouselDotsPagination
          slidesCount={images.length}
          activeSlideIndex={slideIndex}
          onClick={selectSlide}
          color="var(--color-text-inverted)"
        />
      </PositionedElement>
    </CarouselContainer>
  );
};

export default BannerCarousel;
