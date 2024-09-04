import { ADD_USER } from "../constants/constants";

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return {
      ...state,
      user: [...state.users, action.payload],
    };
  } else {
    return state;
  }
}
