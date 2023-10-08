import Todo from "./Todo";
const AddForm = () => (
  <>
    <div className="bg-[#1A1A40] mt-[7%] w-[70%] md:w-[45%] h-[550px] flex flex-col rounded-md">
      <h1 className="text-white text-3xl mt-8 ml-[10%] md:ml-[25%]">
        Get Things Done!
      </h1>

      <div className="flex mt-8 mx-10 text-[#fff]">
        <input
          type="text"
          placeholder="What is the task today?"
          className="md:w-[70%] lg:w-[78%] truncate h-9 p-2 rounded-l-sm border border-[#855AFD] border-solid bg-[#1A1A40] outline-none"
        />
        <button className="whitespace-nowrap text-center bg-[#855AFD] rounded-r-sm px-4 h-[36px]">
          Add Task
        </button>
      </div>

      <div className="mt-[10%] mb-[7%] overflow-y-scroll">
        {[0, 1, 2, 3, 4, 5, 6].map((element) => (
          <Todo key={element} id={element} />
        ))}
      </div>
    </div>
  </>
);

export default AddForm;
