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
  color?: string;
};

const CarouselDotsPagination = ({
  slidesCount,
  activeSlideIndex,
  onClick,
  color,
}: CarouselDotsPaginationProps) => {
  return (
    <CarouselPagination>
      {Array.from({ length: slidesCount }).map((_, index) => (
        <DotButton
          key={`slide-${index}`}
          onClick={() => onClick(index)}
          active={index === activeSlideIndex}
          color={color || "var(--color-text-main)"}
        />
      ))}
    </CarouselPagination>
  );
};

export default CarouselDotsPagination;
