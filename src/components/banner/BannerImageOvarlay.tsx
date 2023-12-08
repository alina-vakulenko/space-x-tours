import styled from "styled-components";

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.48;
  background: #1e1e1e;
  z-index: 2;
`;

const BannerImageOvarlay = () => {
  return <ImageOverlay></ImageOverlay>;
};

export default BannerImageOvarlay;
