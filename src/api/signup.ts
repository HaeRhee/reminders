import { register } from "@src/types/signup";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const authJoinApi = axios.create({
  baseURL,
  timeout: 1500,
});

export const signupApi = {
  postSignup: (payload: register) => authJoinApi.post("/register", payload),
};

export const signupApiHandle = async ({ id, password, nickname }: register) => {
  try {
    const response = await signupApi.postSignup({
      id,
      password,
      nickname,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data;
      if (errorMessage === "Email already exists")
        throw Error("이미 있는 이메일 입니다");
    }
  }
};
