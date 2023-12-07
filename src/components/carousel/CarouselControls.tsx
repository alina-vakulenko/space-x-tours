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
  disabled?: boolean;
};

const CarouselControls = ({
  showNext,
  showPrev,
  disabled = false,
}: CarouselControlsProps) => {
  return (
    <Controls>
      <BackButton
        aria-label="View Previous"
        onClick={showPrev}
        disabled={disabled}
      />
      <ForwardButton
        aria-label="View Next"
        onClick={showNext}
        disabled={disabled}
      />
    </Controls>
  );
};

export default CarouselControls;
