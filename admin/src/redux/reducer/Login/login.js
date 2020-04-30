import { LOGIN_ADMIN, ERROR } from "../../action/Login/login.type";
const INITIAL_STATE = () => {
  let user = JSON.parse(localStorage.getItem("currentuser"));
  return user ? { loggedin: true, user } : {};
};
export const LoginUser = (state = INITIAL_STATE(), action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_ADMIN:
      return { ...state, user: action.payload, loggedin: false };
    case ERROR:
      return { message_error: action.payload, loggedin: false };

    default:
      return state;
  }
};
