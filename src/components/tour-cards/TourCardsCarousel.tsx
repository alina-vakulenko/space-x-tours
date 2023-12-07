import { useQuery } from "@apollo/client";
import styled from "styled-components";
import images from "../../assets/images";
import { FlexRow, PositionedElement } from "../../globalStyles";
import { GET_TOURS } from "../../apollo/queries";
import { useCarousel } from "../../hooks/useCarousel";
import CarouselContainer from "../carousel/CarouselContainer";
import CarouselControls from "../carousel/CarouselControls";
import CarouselSlidesWrapper from "../carousel/CarouselSlidesWrapper";
import TourCard from "./TourCard";
import CarouselDotsPagination from "../carousel/CarouselDotsPagination";
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

  const { slideIndex, selectSlide, showNext, showPrev } = useCarousel({
    totalCarouselItems: tours.length,
    slidesPerView: 3,
  });

  if (error) {
    return <h3>Something went wrong...</h3>;
  }

  return (
    <Section>
      <SectionHeader as="header">
        <CarouselTitle>popular tours</CarouselTitle>
        <CarouselControls
          showNext={showNext}
          showPrev={showPrev}
          disabled={Boolean(error)}
        />
      </SectionHeader>
      <CarouselContainer>
        <CarouselSlidesWrapper gap="24px">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <TourCardSkeleton key={index} />
              ))
            : tours.map((tour, index) => (
                <TourCard
                  key={tour?.id}
                  card={{
                    ...tour,
                    imagePath: images[index % images.length].imagePath,
                  }}
                  actions={["buy", "addToFavourite"]}
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
