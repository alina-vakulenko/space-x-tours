import styled from "styled-components";
import { ArrowDownIcon } from "../../globalStyles";

const BannerScrollDownButton = styled.button`
  position: absolute;
  left: 605px;
  bottom: 33px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: var(--color-text-inverted);
  font-family: "Lato", sans-serif;
  font-size: 32px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ScrollDownButton = () => {
  return (
    <BannerScrollDownButton>
      Explore tours
      <ArrowDownIcon alt="Scroll to bottom" />
    </BannerScrollDownButton>
  );
};

export default ScrollDownButton;
