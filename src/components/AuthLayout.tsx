import { getCookie } from "@src/api/cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const token = getCookie("accessToken");
  if (!token) {
    alert("로그인이 되어있지 않아유! 로그인 해 주세용!");
    return <Navigate replace to="/" />;
  }
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
