import styled from "styled-components";
import sprite from "../../assets/sprite.svg";

const BannerScrollDownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 300;
  border: none;
  background-color: transparent;
  color: var(--color-text-inverted);
  text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000,
    1px -1px 0 #000;
`;

const ScrollDownButton = () => {
  return (
    <BannerScrollDownButton>
      Explore tours
      <svg aria-hidden width={40} height={40}>
        <use href={sprite + "#arrow-down"} />
      </svg>
    </BannerScrollDownButton>
  );
};

export default ScrollDownButton;
