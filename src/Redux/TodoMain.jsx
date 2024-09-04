import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, inputTodo } from "./TodoSlice";

const TodoMain = () => {
  const { todos, text } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="p-10 flex items-center flex-col">
      <div className="">
        <input
          value={text}
          onChange={(e) => dispatch(inputTodo(e.target.value))}
          className="border border-black w-[300px] h-10 rounded-md"
          type="text"
        />
        <button
          onClick={() => dispatch(addTodo())}
          className="w-20 bg-blue-600 p-2 ml-5 rounded-md"
        >
          Add
        </button>
      </div>

      <div className="">
        {todos.map((ele, ind) => (
          <div className="flex mt-5"
           key={ind}>
            <p className="w-[300px] h-10 bg-blue-300 flex items-center justify-center rounded-md ">{ele}</p>
            <button
              className="w-20 bg-red-500 p-2 ml-5 rounded-md"
              onClick={() => dispatch(deleteTodo(ind))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoMain;
