import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const authApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = {
  getSignup: () => authApi.get("/users"),
};
