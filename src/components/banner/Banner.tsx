import styled from "styled-components";
import sprite from "../../assets/sprite.svg";
import images from "../../assets/images";
import {
  BannerTitle,
  FullWidthImage,
  PositionedElement,
} from "../../globalStyles";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselContainer from "../carousel/CarouselContainer";
import CarouselSlidesWrapper from "../carousel/CarouselSlidesWrapper";
import CarouselDotsPagination from "../carousel/CarouselDotsPagination";

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
  maxwidth: inherit;
  width: "100%";
  height: "740px";
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.48;
  background: #1e1e1e;
  z-index: 2;
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

        <ImageOverlay />

        <PositionedElement $left="167px" $top="239px" $zIndex={3}>
          <PositionedElement>
            <BannerTitle>The space is waiting for</BannerTitle>
          </PositionedElement>
          <BannerTitle $fontSize="310px">you</BannerTitle>
        </PositionedElement>

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
            <svg aria-hidden width={40} height={40}>
              <use href={sprite + "#arrow-down"} />
            </svg>
          </LinkButton>
        </PositionedElement>
      </CarouselContainer>
    </BannerWrapper>
  );
};

export default Banner;
