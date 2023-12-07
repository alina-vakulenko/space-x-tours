import { useRecoilState } from "recoil";
import { favourites } from "../state";
import {
  BannerTitle,
  FullWidthImage,
  PositionedElement,
} from "../globalStyles";
import images from "../assets/images";
import ClearAllButton from "../components/buttons/ClearAllButton";
import TourCard from "../components/tour-cards/TourCard";
import styled from "styled-components";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(411px, 1fr));
  gap: 24px;
`;

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 440px;
  margin-bottom: 64px;
`;

const Banner = styled(FullWidthImage)`
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  object-position: top;
`;

const Favorites = () => {
  const [favTours, setFavTours] = useRecoilState(favourites);

  return (
    <>
      <BannerWrapper>
        <Banner src={images[2].imagePath} alt={images[2].alt} />
        <PositionedElement $top="220px" $centerX>
          <BannerTitle>favourites</BannerTitle>
        </PositionedElement>
      </BannerWrapper>
      <section
        style={{
          paddingInline: "80px",
        }}
      >
        <div style={{ textAlign: "end", marginBottom: "40px" }}>
          <ClearAllButton
            onClick={() => setFavTours([])}
            aria-label="Remove all toures from favourites"
          />
        </div>
        <CardsGrid>
          {favTours.length > 0 &&
            favTours.map((card, index) => (
              <TourCard
                card={{
                  ...card,
                  imagePath: images[index % images.length].imagePath,
                }}
                actions={["buy", "delete"]}
              />
            ))}
        </CardsGrid>
      </section>
    </>
  );
};

export default Favorites;
