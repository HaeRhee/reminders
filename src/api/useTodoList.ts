import { todoApi } from "./todoList";

export const getTodosList = async () => {
  try {
    const { data } = await todoApi.getTodos();

    return data;
  } catch (err) {
    console.log("getTodosList", err);
    throw Error("error");
  }
};
