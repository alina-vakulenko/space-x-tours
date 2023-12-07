import { useEffect, useState, useRef, useCallback } from "react";

type CarouselSettings = {
  totalCarouselItems: number;
  slidesPerView?: number;
  autoPlayOn?: boolean;
};

export const useCarousel = ({
  totalCarouselItems,
  slidesPerView = 1,
  autoPlayOn = false,
}: CarouselSettings) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoPlayOn);

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const showNext = useCallback(() => {
    setSlideIndex(
      (prevIndex) => (prevIndex + slidesPerView) % totalCarouselItems
    );
  }, [slidesPerView, totalCarouselItems]);

  const showPrev = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0
        ? totalCarouselItems - slidesPerView
        : prevIndex - slidesPerView
    );
  };

  useEffect(() => {
    if (!autoPlay) return;

    interval.current = setInterval(showNext, 5000);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [autoPlay, slideIndex, totalCarouselItems, showNext]);

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
