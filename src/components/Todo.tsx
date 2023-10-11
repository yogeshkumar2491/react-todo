import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import TodoContext from "../utils/TodoContext";
import { useContext } from "react";

const Todo = (props: { id: number; message: string }[]) => {
  const todo = props;
  // const { todo } = useContext(TodoContext);
  return (
    <div className="mt-[10%] mb-[7%] overflow-y-scroll">
      {todo.map(({ id, message }) => (
        <div
          key={id}
          className={
            "flex justify-between text-xl bg-[#8758ff] text-[#fff] rounded-sm p-2 mx-10" +
            (id !== 0 ? " mt-10" : "")
          }
        >
          <p className="truncate">{message}</p>
          <div className="flex p-1 cursor-pointer">
            <BiEdit />
            <AiOutlineDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
