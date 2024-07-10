import { getCookie } from "@src/api/cookie";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const NonAuthLayout = () => {
  const token = getCookie("accessToken");
  if (token) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;
