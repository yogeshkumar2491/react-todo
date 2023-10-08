import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
interface TodoInfo {
  id: number;
}

const Todo = (props: TodoInfo) => {
  const { id } = props;
  return (
    <div
      className={
        "flex justify-between text-xl bg-[#8758ff] text-[#fff] rounded-sm p-2 mx-10" +
        (id !== 0 ? " mt-10" : "")
      }
    >
      <p className="truncate">explain why jordan is the goat{id}</p>
      <div className="flex p-1 cursor-pointer">
        <BiEdit />
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default Todo;
