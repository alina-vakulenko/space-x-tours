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

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    timeout.current = setTimeout(showNext, 5000);

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [autoPlay, slideIndex, totalCarouselItems, showNext]);

  const stopAutoPlay = () => {
    setAutoPlay(false);
    timeout.current && clearTimeout(timeout.current);
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
