import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../redux/action/todoActions";

function TodoInput() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch(); //this already connected to store

  function addTodoToStore() {
    dispatch(addTodoActionCreator(todo));
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodoToStore}>Add Todo...</button>
    </div>
  );
}
export default TodoInput;
