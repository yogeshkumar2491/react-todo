interface TodoProps {
  todoList: { id: number; message: string }[];
}

const Todo: React.FC<TodoProps> = ({ todoList }) => {
  // const { todo } = useContext(TodoContext);
  return (
    <div className="mt-[10%] mb-[7%] overflow-y-scroll">
      {todoList.map(({ id, message }, index) => (
        <div
          key={id}
          className={
            "flex justify-between text-xl bg-[#8758ff] text-[#fff] rounded-sm p-2 mx-10" +
            (id !== 0 ? " mt-10" : "")
          }
        >
          <p className="truncate">{message}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
