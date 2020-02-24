import { USER_REGISTER, ERROR } from "../../action/user/user.type";

export const registerUser = (state = {}, action) => {
  console.log(action, "reducer");
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, item: action.payload };
    case ERROR:
      return { message_error: action.payload };

    default:
      return state;
  }
};
