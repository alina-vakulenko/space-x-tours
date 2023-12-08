import { BannerTitle, PositionedElement } from "../../globalStyles";

const BannerTextOvarlay = () => {
  return (
    <PositionedElement $left="167px" $top="239px" $zIndex={3}>
      <PositionedElement>
        <BannerTitle>The space is waiting for</BannerTitle>
      </PositionedElement>
      <BannerTitle $fontSize="310px">you</BannerTitle>
    </PositionedElement>
  );
};

export default BannerTextOvarlay;
