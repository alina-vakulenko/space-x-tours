import { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../../globalStyles";

const StyledButton = styled(Button)<{
  variant?: "default" | "stretched";
}>`
  width: ${(props) => (props.variant === "stretched" ? "100%" : "163px")};
  padding: 12px 0;
  background-color: hsl(209, 100%, 91%);
  text-transform: uppercase;
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;

type PrimaryButtonProps = {
  children: ReactNode;
  variant?: "default" | "stretched";
};

const PrimaryButton = ({
  children,
  variant = "default",
}: PrimaryButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default PrimaryButton;
