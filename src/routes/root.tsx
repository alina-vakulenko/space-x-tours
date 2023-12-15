import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import styled from "styled-components";

const RootContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const Root = () => {
  return (
    <RootContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </RootContainer>
  );
};

export default Root;
