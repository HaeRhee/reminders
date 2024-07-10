import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnChangeType } from "./Login";
import { signupApiHandle } from "@src/api/signup";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const { id, password, nickname } = form;

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: OnChangeType = e.target;
    setForm((preForm) => ({ ...preForm, [name]: value }));
  };

  const onSignupHandle = async (e: FormEvent) => {
    e.preventDefault();
    console.log(1);
    try {
      const response = await signupApiHandle(form);
      console.log(response);

      if (response && response.data.success === true) {
        alert("회원가입에 성공하였습니다. 로그인 페이지로 이동할게용");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <main>
        <form onSubmit={onSignupHandle}>
          <div>
            <label htmlFor="email">id</label>
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

          <div>
            <label htmlFor="nickname">nickname</label>
            <input
              type="nickname"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeHandle}
            />
          </div>

          <button type="submit">회원가입</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
