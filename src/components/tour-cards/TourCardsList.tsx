import styled from "styled-components";
import TourCard from "./TourCard";
import { Tour } from "../../state";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(411px, 1fr));
  gap: 24px;
  margin-bottom: 104px;
`;

type TourCardsListProps = {
  tours: Tour[];
};

const TourCardsList = ({ tours }: TourCardsListProps) => {
  return (
    <CardsGrid>
      {tours.length > 0 &&
        tours.map((tour) => (
          <TourCard key={tour.id} card={tour} actions={["buy", "delete"]} />
        ))}
    </CardsGrid>
  );
};

export default TourCardsList;
