import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
