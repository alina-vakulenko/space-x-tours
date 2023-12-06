import styled from "styled-components";
import { FlexRow } from "../../globalStyles";
import DotButton from "../buttons/DotButton";

const CarouselPagination = styled(FlexRow)`
  gap: 8px;
`;

type CarouselDotsPaginationProps = {
  slidesCount: number;
  activeSlideIndex: number;
  onClick: (index: number) => void;
};

const CarouselDotsPagination = ({
  slidesCount,
  activeSlideIndex,
  onClick,
}: CarouselDotsPaginationProps) => {
  return (
    <CarouselPagination>
      {Array.from({ length: slidesCount }).map((_, index) => (
        <DotButton
          key={`slide-${index}`}
          onClick={() => onClick(index)}
          active={index === activeSlideIndex}
        />
      ))}
    </CarouselPagination>
  );
};

export default CarouselDotsPagination;
