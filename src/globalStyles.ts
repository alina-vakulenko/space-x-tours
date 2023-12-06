import { styled } from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-text-button);
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const ArrowButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ececec;

  svg > * {
    padding: 5px 0px;
    margin: 0 auto;
  }
`;
