import styled from "styled-components";
import { useRecoilState } from "recoil";
import { favourites } from "../../state";
import { FlexRow, IconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";
import DeleteButton from "../buttons/DeleteButton";
import sprite from "../../assets/sprite.svg";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 572px;
  border: 1px solid var(--color-border);
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
`;

const CardTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const CardSubTitle = styled.h3`
  color: var(--color-text-secondary);
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 300;
`;

const CardActions = styled(FlexRow)`
  margin-top: auto;
  gap: 16px;
`;

const StyledButton = styled(IconButton)<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? "var(--color-accent)" : "current"};
  transition: all 0.2s ease-in-out;

  &:disabled {
    transform: none;
    opacity: 60%;
  }
  &:active,
  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);
    svg {
      fill: var(--color-text-inverted);
    }
  }
`;

type TourCardProps = {
  card: {
    __typename?: "Rocket" | undefined;
    id?: string | null | undefined;
    title?: string | null | undefined;
    subtitle?: string | null | undefined;
    imagePath: string;
  } | null;
  actions: Array<"buy" | "addToFavourite" | "delete">;
};

const TourCard = ({ card, actions }: TourCardProps) => {
  const [favTours, setFavTours] = useRecoilState(favourites);
  if (!card) return;

  const isFavorite = favTours.findIndex((tour) => tour.id === card.id) !== -1;

  return (
    <Card>
      <CardImageContainer>
        <CardImage src={card.imagePath} />
      </CardImageContainer>
      <CardContent>
        <CardTitleWrapper>
          <CardTitle>{card.title}</CardTitle>
          <CardSubTitle>{card.subtitle}</CardSubTitle>
        </CardTitleWrapper>
        <CardActions>
          {actions.includes("buy") ? (
            <PrimaryButton variant="stretched">buy</PrimaryButton>
          ) : null}
          {actions.includes("addToFavourite") ? (
            <StyledButton
              disabled={isFavorite}
              $isActive={isFavorite}
              onClick={() => setFavTours([...favTours, card])}
            >
              <svg aria-hidden width={24} height={24}>
                <use href={sprite + "#heart"} />
              </svg>
            </StyledButton>
          ) : null}
          {actions.includes("delete") ? (
            <DeleteButton
              onClick={() =>
                setFavTours(favTours.filter((tour) => tour.id !== card.id))
              }
            />
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TourCard;
