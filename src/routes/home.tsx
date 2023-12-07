import images from "../assets/images";
import { useRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Carousel from "../components/banner/Carousel";
import { FlexRow, PositionedElement } from "../globalStyles";
import BackButton from "../components/buttons/BackButton";
import ForwardButton from "../components/buttons/ForwardButton";
import CarouselDotsPagination from "../components/banner/CarouselDotsPagination";
import { useCarousel } from "../hooks/useCarousel";
import TourCard from "../components/tour-card/TourCard";
import { GET_TOURS } from "../apollo/queries";

const Section = styled.section`
  padding-inline: 79px 80px;
  margin-bottom: 96px;
  difplay: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionHeader = styled(FlexRow)`
  justify-content: space-between;
`;

const CarouselTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

const CarouselControls = styled(FlexRow)`
  gap: 16px;
`;

const CarouselWrapper = styled.div`
  gap: 24px;
  overflow: hidden;
`;

const CarouselInnerWrapper = styled(FlexRow)`
  gap: 24px;
`;

const Home = () => {
  const { data } = useQuery(GET_TOURS);
  const [width, setWidth] = useState(0);

  const carousel = useRef<HTMLDivElement | null>(null);
  const { slideIndex, selectSlide, showNext, showPrev } = useCarousel({
    totalCarouselItems: data?.tours?.length || 1,
    slidesPerView: 3,
  });

  useEffect(() => {
    carousel.current &&
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div style={{ width: "100%", maxWidth: "1440px", height: "740px" }}>
        <Carousel />
      </div>
      <Section>
        <SectionHeader as="header">
          <CarouselTitle>popular tours</CarouselTitle>
          <CarouselControls>
            <BackButton aria-label="View Previous Tour" onClick={showPrev} />
            <ForwardButton aria-label="View Next " onClick={showNext} />
          </CarouselControls>
        </SectionHeader>
        <CarouselWrapper ref={carousel}>
          <CarouselInnerWrapper>
            {data &&
              data.tours &&
              data.tours.length > 0 &&
              data.tours.map((tour) => (
                <TourCard
                  key={tour?.id}
                  card={{ ...tour, imagePath: images[0].imagePath }}
                />
              ))}
          </CarouselInnerWrapper>
        </CarouselWrapper>
        <PositionedElement $centerX>
          <CarouselDotsPagination
            slidesCount={data?.tours?.length || 1}
            activeSlideIndex={slideIndex}
            onClick={selectSlide}
          />
        </PositionedElement>
      </Section>
    </div>
  );
};

export default Home;
