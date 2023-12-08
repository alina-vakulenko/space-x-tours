import { useEffect, useState, useRef, useCallback } from "react";

type CarouselSettings = {
  totalCarouselItems: number;
  shiftBy?: number;
  autoPlayOn?: boolean;
  autoplayInterval?: number;
};

export const useCarousel = ({
  totalCarouselItems,
  shiftBy = 1,
  autoPlayOn = false,
  autoplayInterval = 5000,
}: CarouselSettings) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoPlayOn);

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const showNext = useCallback(() => {
    setSlideIndex((prevIndex) => (prevIndex + shiftBy) % totalCarouselItems);
  }, [shiftBy, totalCarouselItems]);

  const showPrev = () => {
    if (slideIndex === 0) return;
    setSlideIndex((prevIndex) => prevIndex - shiftBy);
  };

  useEffect(() => {
    if (!autoPlay) return;

    interval.current = setInterval(showNext, autoplayInterval);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [autoPlay, autoplayInterval, showNext]);

  const stopAutoPlay = () => {
    setAutoPlay(false);
    interval.current && clearInterval(interval.current);
  };

  const startAutoPlay = () => {
    setAutoPlay(true);
  };

  const selectSlide = (index: number) => setSlideIndex(index);

  return {
    slideIndex,
    selectSlide,
    showNext,
    showPrev,
    stopAutoPlay,
    startAutoPlay,
  };
};
