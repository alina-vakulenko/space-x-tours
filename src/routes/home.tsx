import images from "../assets/images";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "../components/banner/Carousel";
import { FlexRow, Button } from "../globalStyles";
import FavoriteButton from "../components/buttons/FavoriteButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import BackButton from "../components/buttons/BackButton";
import ForwardButton from "../components/buttons/ForwardButton";
import sprite from "../assets/sprite.svg";
import CarouselDotsPagination from "../components/banner/CarouselDotsPagination";

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

const CarouselWrapper = styled(motion.div)`
  gap: 24px;
  overflow: hidden;
`;

const CarouselInnerWrapper = styled(FlexRow)`
  gap: 24px;
`;

const Card = styled(motion.article)`
  min-width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 296px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 32px 32px 24px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CardSubTitle = styled.h3`
  color: var(--color-text-secondary);
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
`;
const CardActions = styled(FlexRow)`
  flex-grow: 1;
  gap: 16px;
`;

const cards = [
  {
    id: "card1",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[0],
  },
  {
    id: "card2",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[1],
  },
  {
    id: "card3",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[2],
  },
  {
    id: "card4",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[0],
  },
  {
    id: "card5",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[1],
  },
  {
    id: "card6",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    ...images[2],
  },
] as const;

const Home = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

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
            <BackButton aria-label="View Previous Tour" />
            <ForwardButton aria-label="View Next " />
          </CarouselControls>
        </SectionHeader>
        <CarouselWrapper ref={carousel}>
          <CarouselInnerWrapper
            as={motion.div}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {cards.map((card) => (
              <Card key={card.id}>
                <CardImageContainer>
                  <CardImage src={card.imagePath} />
                </CardImageContainer>
                <CardContent>
                  <CardTitleWrapper>
                    <CardTitle>{card.title}</CardTitle>
                    <CardSubTitle>{card.subtitle}</CardSubTitle>
                  </CardTitleWrapper>
                  <CardActions>
                    <PrimaryButton variant="stretched">buy</PrimaryButton>
                    <FavoriteButton />
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </CarouselInnerWrapper>
        </CarouselWrapper>
        <CarouselDotsPagination
          slidesCount={cards.length}
          activeSlideIndex={cardIndex}
          onClick={(index: number) => setCardIndex(index)}
        />
      </Section>
    </div>
  );
};

export default Home;
