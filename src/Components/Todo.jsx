import React, { useState } from "react";
import { addTodo, deleteTodo, editTodo } from "../Redux/Features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  //   console.log(text);
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // console.log(todo);

  const handleSubmit = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    // console.log(todo);

    setText(todo.task);
    setEditingId(todo.id);
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        value={text}
        placeholder="Enter the Todo"
        onChange={(e) => setText(e.target.value)}
        className="border px-3 py-1 m-10"
      />

      <button
        onClick={handleSubmit}
        className="border px-3 py-1 cursor-pointer"
      >
        Submit
      </button>

      {todo.length === 0
        ? ""
        : todo.map((ele) => {
            return (
              <div
                key={ele.id}
                className="bg-blue-400 w-100 p-2 m-3 relative flex justify-between"
              >
                <li>{ele.task}</li>
                <button
                  className="border px-3 py-1 ml-3 cursor-pointer"
                  onClick={() => handleDelete(ele.id)}
                >
                  delete
                </button>
                <button
                  className="border px-3 py-1 ml-3 cursor-pointer"
                  onClick={() => handleEdit(ele)}
                >
                  edit
                </button>
              </div>
            );
          })}
    </div>
  );
};

export default Todo;
