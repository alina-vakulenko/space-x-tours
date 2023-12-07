import styled from "styled-components";
import { FlexRow, IconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";

const Card = styled.article`
  display: flex;
  flex-direction: column;
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

const StyledButton = styled(IconButton)<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? "hsl(335, 71%, 54%)" : "current"};
  transition: all 0.2s ease-in-out;

  &:disabled {
    transform: none;
    opacity: 60%;
  }
  &:active,
  &:hover,
  &:focus-visible {
    background-color: hsl(335, 71%, 54%);
    svg {
      fill: var(--color-text-inverted);
    }
  }
`;

const TourCardSkeleton = () => {
  return (
    <Card>
      <CardImageContainer></CardImageContainer>
      <CardContent>
        <CardTitleWrapper>
          <CardTitle></CardTitle>
          <CardSubTitle></CardSubTitle>
        </CardTitleWrapper>
        <CardActions>
          <PrimaryButton variant="stretched">buy</PrimaryButton>
          <StyledButton></StyledButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TourCardSkeleton;
