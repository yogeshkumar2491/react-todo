import { createContext } from "react";

const todo: { id: number; message: string }[] = [],
  TodoContext = createContext({
    todo,
  });

export default TodoContext;
