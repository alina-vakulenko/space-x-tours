import { BannerTitle, PositionedElement } from "../../globalStyles";

const BannerOverlay = () => {
  return (
    <PositionedElement $left="167px" $top="239px">
      <PositionedElement>
        <BannerTitle>The space is waiting for</BannerTitle>
      </PositionedElement>
      <BannerTitle $fontSize="310px">you</BannerTitle>
    </PositionedElement>
  );
};

export default BannerOverlay;
