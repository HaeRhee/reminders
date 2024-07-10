import { useCookies } from "react-cookie";
import Login from "./non-auth/Login";

const Home = () => {
  const [cookies] = useCookies<string>(["accessToken"]);
  console.log(cookies);
  const getNickname = cookies.nickname;

  return (
    <div>
      {!cookies.accessToken ? <Login /> : <p>{getNickname}님 환영합니다!</p>}
    </div>
  );
};

export default Home;
