import { getCookie } from "@src/api/cookie";
import { useJwt } from "react-jwt";
import { Link } from "react-router-dom";

export type NicknameDecoding = {
  nickname: string | unknown;
};

const Header = () => {
  const token = getCookie("accessToken");
  const { decodedToken } = useJwt(token);
  console.log(decodedToken);
  const email = "aaa@naver.com";

  return (
    <div className="flex gap-[10px] p-[20px] bg-[#90ee90] ">
      <Link to="/login">로그인</Link>
      <Link to="/todoList">투두리스트</Link>
      <Link to={`/user/${email}`}>마이페이지</Link>
    </div>
  );
};
export default Header;
