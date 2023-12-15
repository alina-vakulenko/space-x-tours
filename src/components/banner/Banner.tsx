import styled from "styled-components";
import images from "../../assets/images";
import ArrowDownIcon from "../../assets/svg/arrow-down.svg?react";
import {
  CarouselSlidesWrapper,
  FullWidthImage,
  PositionedElement,
} from "../../globalStyles";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselContainer from "../carousel/CarouselContainer";
import CarouselDotsPagination from "../carousel/CarouselDotsPagination";
import BannerTextOvarlay from "./BannerTextOvarlay";
import BannerImageOvarlay from "./BannerImageOvarlay";

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 300;
  border: none;
  background-color: transparent;
  color: var(--color-text-inverted);
  text-shadow: 1px 1px 2px #000;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    opacity: 0.7;
    svg {
      transform: translateY(6px);
    }
  }
`;

const CarouselSlide = styled(FullWidthImage)<{ $offsetIndex: number }>`
  translate: ${(props) => `${-100 * props.$offsetIndex}%`};

  @media not (prefers-reduced-motion: reduce) {
    transition: translate 2000ms ease-in-out;
  }
`;

const BannerWrapper = styled.div`
  max-width: inherit;
  width: "100%";
  height: "740px";
`;

type BannerProps = {
  handleScrollBottom: () => void;
};

const Banner = ({ handleScrollBottom }: BannerProps) => {
  const { slideIndex, selectSlide, startAutoPlay, stopAutoPlay } = useCarousel({
    totalCarouselItems: images.length,
    autoPlayOn: true,
  });

  return (
    <BannerWrapper>
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

        <BannerImageOvarlay />
        <BannerTextOvarlay />

        <PositionedElement $top="413px" $left="640px" $zIndex={4}>
          <CarouselDotsPagination
            slidesCount={images.length}
            activeSlideIndex={slideIndex}
            onClick={selectSlide}
            color="var(--color-text-inverted)"
          />
        </PositionedElement>

        <PositionedElement $left="605px" $bottom="33px" $zIndex={4}>
          <LinkButton onClick={handleScrollBottom}>
            Explore tours
            <ArrowDownIcon aria-hidden width={40} height={40} />
          </LinkButton>
        </PositionedElement>
      </CarouselContainer>
    </BannerWrapper>
  );
};

export default Banner;
