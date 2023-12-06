import styled from "styled-components";
import Carousel from "../components/banner/Carousel";
import {
  FlexRow,
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleFilledIcon,
  CircleIcon,
  Button,
} from "../globalStyles";
import slideFirst from "../assets/images/png/slide-1.png";
import slideSecond from "../assets/images/png/slide-2.png";
import slideThird from "../assets/images/png/slide-3.png";
import FavoriteButton from "../components/buttons/FavoriteButton";
import PrimaryButton from "../components/buttons/PrimaryButton";

const CarouselHeader = styled(FlexRow)`
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

const PaginationButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ececec;
`;

const CarouselSection = styled.section`
  padding-inline: 79px 80px;
  margin-bottom: 96px;
  difplay: flex;
  flex-direction: column;
  gap: 40px;
`;

const CarouselCardsWrapper = styled(FlexRow)`
  gap: 24px;
`;

const CarouselPagination = styled(FlexRow)`
  gap: 8px;

  button {
    background: transparent;
    border: none;
  }
`;

const Card = styled.article`
  width: 411px;
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
  margin-top: auto;
  gap: 16px;
`;

const cards = [
  {
    id: "card1",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideFirst,
  },
  {
    id: "card2",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideSecond,
  },
  {
    id: "card3",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideThird,
  },
  {
    id: "card4",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideSecond,
  },
  {
    id: "card5",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideThird,
  },
  {
    id: "card6",
    title: "extraordinary tour",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    imagePath: slideFirst,
  },
] as const;

const Home = () => {
  return (
    <div>
      <Carousel />
      <CarouselSection>
        <CarouselHeader as="header">
          <CarouselTitle>popular tours</CarouselTitle>
          <CarouselControls>
            <PaginationButton>
              <ArrowLeftIcon />
            </PaginationButton>
            <PaginationButton>
              <ArrowRightIcon />
            </PaginationButton>
          </CarouselControls>
        </CarouselHeader>
        <CarouselCardsWrapper>
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
        </CarouselCardsWrapper>
        <CarouselPagination>
          {cards.map((card) =>
            card.id === "card1" ? <CircleFilledIcon /> : <CircleIcon />
          )}
        </CarouselPagination>
      </CarouselSection>
    </div>
  );
};

export default Home;
