import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/constants";

export function addTodoActionCreator(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
export function removeTodoActionCreator(todoID) {
  return {
    type: REMOVE_TODO,
    payload: todoID,
  };
}
export function toggleTodoActionCreator(todoID) {
  return {
    type: TOGGLE_TODO,
    payload: todoID,
  };
}
