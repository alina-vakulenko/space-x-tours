import { useRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import images from "../../assets/images";
import {
  CarouselSlidesWrapper,
  FlexRow,
  PositionedElement,
} from "../../globalStyles";
import { GET_TOURS } from "../../apollo/queries";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselContainer from "../carousel/CarouselContainer";
import CarouselControls from "../carousel/CarouselControls";
import CarouselDotsPagination from "../carousel/CarouselDotsPagination";
import TourCard from "./TourCard";
import TourCardSkeleton from "./TourCardSkeleton";

const Section = styled.section`
  padding-inline: 80px;
  margin-block: 96px;
  position: relative;
`;

const SectionHeader = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 40px;
`;

const CarouselTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

const TourCardsCarousel = () => {
  const { data, loading, error } = useQuery(GET_TOURS);
  const tours = data?.tours || [];

  const [offsetWidth, setOffsetWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector("article");
      const cardWidth = card?.clientWidth || 0;
      const scrollWidth = carouselRef.current.scrollWidth;
      const gap = (scrollWidth - tours.length * cardWidth) / tours.length;
      setOffsetWidth(cardWidth + gap);
    }
  }, [carouselRef, tours.length]);

  const { slideIndex, selectSlide, showNext, showPrev } = useCarousel({
    totalCarouselItems: tours.length,
  });

  if (error) {
    return (
      <Section>
        <CarouselTitle>Something went wrong...</CarouselTitle>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeader as="header">
        <CarouselTitle>popular tours</CarouselTitle>
        <CarouselControls
          showNext={showNext}
          showPrev={showPrev}
          disabled={Boolean(error) || tours.length === 0}
        />
      </SectionHeader>
      <CarouselContainer>
        <CarouselSlidesWrapper $gap="24px" ref={carouselRef}>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <TourCardSkeleton key={index} />
              ))
            : tours.length > 0 &&
              tours.map((tour, index) => (
                <TourCard
                  key={tour?.id || index}
                  card={{
                    id: tour?.id || String(index),
                    title: tour?.title || "",
                    subtitle: tour?.subtitle || "",
                    imagePath: images[index % images.length].imagePath,
                  }}
                  actions={["buy", "addToFavourite"]}
                  offset={slideIndex * offsetWidth}
                />
              ))}
        </CarouselSlidesWrapper>

        <PositionedElement $centerX $bottom="-64px">
          <CarouselDotsPagination
            slidesCount={tours.length}
            activeSlideIndex={slideIndex}
            onClick={selectSlide}
          />
        </PositionedElement>
      </CarouselContainer>
    </Section>
  );
};

export default TourCardsCarousel;
