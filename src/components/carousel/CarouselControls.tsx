import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import BackButton from "../buttons/BackButton";
import ForwardButton from "../buttons/ForwardButton";

const Controls = styled(FlexRow)`
  gap: 16px;
`;

type CarouselControlsProps = {
  showNext: () => void;
  showPrev: () => void;
};

const CarouselControls = ({ showNext, showPrev }: CarouselControlsProps) => {
  return (
    <Controls>
      <BackButton aria-label="View Previous" onClick={showPrev} />
      <ForwardButton aria-label="View Next" onClick={showNext} />
    </Controls>
  );
};

export default CarouselControls;
