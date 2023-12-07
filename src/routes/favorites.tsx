import { useRecoilState } from "recoil";
import { favourites } from "../state";
import { FullWidthImage } from "../globalStyles";
import images from "../assets/images";
import ClearAllButton from "../components/buttons/ClearAllButton";
import TourCard from "../components/tour-cards/TourCard";

const Favorites = () => {
  const [favCards] = useRecoilState(favourites);

  return (
    <>
      <div style={{ height: "440px" }}>
        <FullWidthImage src={images[2].imagePath} alt={images[2].imagePath} />
      </div>
      <ClearAllButton />
      {favCards.length > 0 &&
        favCards.map((card, index) => (
          <TourCard
            card={{
              ...card,
              imagePath: images[index % images.length].imagePath,
            }}
            actions={["buy", "delete"]}
          />
        ))}
    </>
  );
};

export default Favorites;
