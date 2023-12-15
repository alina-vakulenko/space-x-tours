import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import HeartIcon from "../../assets/svg/heart.svg?react";
import { Tour, favourites } from "../../state";
import { FlexRow, styledIconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";
import DeleteButton from "../buttons/DeleteButton";

const Card = styled.article<{ $offset?: number }>`
  display: flex;
  flex-direction: column;
  max-width: 411px;
  min-width: 411px;
  height: 572px;
  border: 1px solid var(--color-border);
  translate: ${(props) => (props.$offset ? `${-props.$offset}px` : 0)};

  @media not (prefers-reduced-motion: reduce) {
    transition: translate 500ms ease-in-out;
  }
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

const StyledButton = styled.button<{ $isActive: boolean }>`
  ${styledIconButton}
  background-color: ${(props) =>
    props.$isActive ? "var(--color-accent)" : "current"};
  svg > * {
    fill: ${(props) =>
      props.$isActive ? "var(--color-text-inverted)" : "current"};
  }

  &:disabled {
    transform: none;
  }

  &:active,
  &:hover,
  &:focus-visible {
    background-color: var(--color-accent);
    svg > * {
      fill: var(--color-text-inverted);
    }
  }
`;

type TourCardProps = {
  card: Tour;
  actions: Array<"buy" | "addToFavourite" | "delete">;
  offset?: number;
};

const TourCard = ({ card, actions, offset }: TourCardProps) => {
  const [favTours, setFavTours] = useRecoilState(favourites);

  const isFavorite = favTours.findIndex((tour) => tour.id === card.id) !== -1;

  useEffect(() => {
    localStorage.setItem("favTours", JSON.stringify(favTours));
  }, [favTours]);

  return (
    <Card $offset={offset}>
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
              <HeartIcon aria-hidden width={24} height={24} />
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
