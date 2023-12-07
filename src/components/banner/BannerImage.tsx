import { FullWidthImage } from "../../globalStyles";

type BannerProps = {
  src: string;
  alt: string;
};

const BannerImage = ({ src, alt }: BannerProps) => {
  return <FullWidthImage src={src} alt={alt} />;
};

export default BannerImage;
