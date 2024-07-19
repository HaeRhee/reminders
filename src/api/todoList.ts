import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1500,
});

export const todoApi = {
  getTodos: () => api.get("/comments?_page=1"),
};
