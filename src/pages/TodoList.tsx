// import { todoApi } from "@src/api/todoList";

import { getTodosList } from "@src/api/useTodoList";
import { QUERYKEY_TODOLIST } from "@src/queryKey/todoList";
import { Todolist } from "@src/types/todolist";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
  const { isPending, data: todos } = useQuery({
    queryKey: [QUERYKEY_TODOLIST.todos],
    queryFn: getTodosList,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      {todos.map(({ id, name, email }: Todolist) => {
        return (
          <ul key={id}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
        );
      })}
    </main>
  );
};

export default TodoList;
