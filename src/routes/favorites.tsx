import { useRecoilState } from "recoil";
import styled from "styled-components";
import { favourites } from "../state";
import {
  BannerTitle,
  Container,
  FullWidthImage,
  PositionedElement,
} from "../globalStyles";
import images from "../assets/images";
import ClearAllButton from "../components/buttons/ClearAllButton";
import TourCardsList from "../components/tour-cards/TourCardsList";

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 440px;
  margin-bottom: 64px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.64;
  background: #1e1e1e;
  z-index: 2;
`;

const ClearAllButtonWrapper = styled.div`
  text-align: end;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const Favorites = () => {
  const [favTours, setFavTours] = useRecoilState(favourites);

  return (
    <>
      <BannerWrapper>
        <FullWidthImage src={images[2].imagePath} alt={images[2].alt} />

        <ImageOverlay />

        <PositionedElement $top="220px" $centerX $zIndex={3}>
          <BannerTitle>favourites</BannerTitle>
        </PositionedElement>
      </BannerWrapper>

      <Container>
        {favTours.length > 0 ? (
          <ClearAllButtonWrapper>
            <ClearAllButton
              onClick={() => setFavTours([])}
              aria-label="Remove all toures from favourites"
            />
          </ClearAllButtonWrapper>
        ) : (
          <Title>Here will be tours you 🩷</Title>
        )}

        <TourCardsList tours={favTours} />
      </Container>
    </>
  );
};

export default Favorites;
