import styled from "styled-components";
import { FlexRow, styledIconButton } from "../../globalStyles";
import PrimaryButton from "../buttons/PrimaryButton";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 411px;
  min-width: 411px;
  height: 572px;
  border: 1px solid var(--color-border);
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 296px;
  background-color: lightgray;
`;

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 32px 24px;
`;

const CardActions = styled(FlexRow)`
  margin-top: auto;
  gap: 16px;
`;

const Button = styled.button`
  ${styledIconButton}
`;

const TourCardSkeleton = () => {
  return (
    <Card>
      <CardImageContainer></CardImageContainer>
      <CardContent>
        <CardActions>
          <PrimaryButton variant="stretched">buy</PrimaryButton>
          <Button></Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TourCardSkeleton;
