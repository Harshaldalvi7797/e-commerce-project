import { FORGET_PASSWORD } from "../../action/password/password.type";
const INITIAL_STATE = () => {
  let user = JSON.parse(localStorage.getItem("currentuser"));
  return user ? { loggedin: true, user } : {};
};
export const ForgetPass = (state = INITIAL_STATE(), action) => {
  console.log(action);
  switch (action.type) {
    case FORGET_PASSWORD:
      return { item: action.payload };
    default:
      return state;
  }
};
