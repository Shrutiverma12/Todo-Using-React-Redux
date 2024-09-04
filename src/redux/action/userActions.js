import { ADD_USER } from "../constants/constants";

export default function userActions(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
