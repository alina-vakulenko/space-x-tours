import { useRef } from "react";
import { Banner } from "../components/banner";
import { TourCards } from "../components/tour-cards";

const Home = () => {
  const pageBottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (pageBottomRef.current) {
      pageBottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <>
      <Banner handleScrollBottom={scrollToBottom} />
      <TourCards />
      <div ref={pageBottomRef}></div>
    </>
  );
};

export default Home;
