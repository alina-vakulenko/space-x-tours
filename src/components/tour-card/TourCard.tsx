import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";
import FavoriteButton from "../buttons/FavoriteButton";

const Card = styled.article`
  display: flex;
  flex-direction: column;
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 32px 24px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 103px;
  overflow: hidden;
  hyphens: auto;
  text-overflow: ellipsis;
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

type TourCardProps = {
  card: {
    __typename?: "Rocket" | undefined;
    id?: string | null | undefined;
    title?: string | null | undefined;
    subtitle?: string | null | undefined;
    imagePath: string;
  } | null;
};

const TourCard = ({ card }: TourCardProps) => {
  if (!card) return;
  return (
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
  );
};

export default TourCard;
