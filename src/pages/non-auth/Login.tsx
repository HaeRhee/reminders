import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@src/api/auth";

import { useTokenStore } from "@src/shared/zustand/useTokenStore";

export type OnChangeType = {
  name: string;
  value: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { setTokenData } = useTokenStore();
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const { id, password } = form;

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: OnChangeType = e.target;
    setForm((preForm) => ({ ...preForm, [name]: value }));
  };

  const onLoginHandle = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginApi.getSignup();
      console.log(response);

      const token = response.data.accessToken;
      console.log(token);

      if (!response.data.accessToken) {
        alert("토큰이 없습니다. 문의해주세요.");
        return;
      }

      alert("로그인에 성공하였습니다. 메인 페이지로 이동할게용");
      if (response.data.accessToken) {
        const token = response.data.accessToken;
        console.log("토큰 나왔엉", token);
        // 상태관리 저장소에 토큰 저장
        if (token) {
          setTokenData(true, token);
        }

        navigate("/");
      }
    } catch (error) {
      throw Error("error");
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <main>
        <section className="text-black">
          <form onSubmit={onLoginHandle}>
            <div>
              <label htmlFor="id">id</label>
              <input
                type="string"
                id="id"
                name="id"
                value={id}
                onChange={onChangeHandle}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangeHandle}
              />
            </div>

            <button type="submit">로그인</button>
            <button
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              홈으로
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
