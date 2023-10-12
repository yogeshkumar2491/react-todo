import Todo from "./Todo";
import TodoContext from "../utils/TodoContext";
import { useContext, useState } from "react";
const AddForm = () => {
  const { todo } = useContext(TodoContext);
  const [message, setMessage] = useState("");
  function addTodo() {
    if (message) {
      todo.push({ id: todo.length, message });
      setMessage("");
    }
  }

  function deleteTodo(index: number) {
    if (index) {
      todo.splice(index, 1);
    }
  }
  return (
    <TodoContext.Provider value={{ todo }}>
      <div className="bg-[#1A1A40] mt-[7%] w-[70%] md:w-[45%] h-[550px] flex flex-col rounded-md">
        <h1 className="text-white text-3xl mt-8 ml-[10%] md:ml-[25%]">
          Get Things Done!
        </h1>

        <div className="flex mt-8 mx-10 text-[#fff]">
          <form className="w-[100%]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What is the task today?"
              className="w-[75%] truncate h-9 p-2 rounded-l-sm border border-[#855AFD] border-solid bg-[#1A1A40] outline-none"
            />
            <button
              onClick={addTodo}
              className="w-[25%] truncate whitespace-nowrap text-center bg-[#855AFD] rounded-r-sm px-4 h-[36px]"
            >
              Add Task
            </button>
          </form>
        </div>
        <Todo todoList={todo} />
      </div>
    </TodoContext.Provider>
  );
};

export default AddForm;
