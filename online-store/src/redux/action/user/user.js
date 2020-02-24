import { USER_REGISTER, ERROR } from "./user.type";
import { userRegister } from "../../api/user/register";
import { history } from "../../history/index";
export const UserRegister = item => {
  return async dispatch => {
    try {
      let sendData = await userRegister(item);
      console.log(sendData);
      dispatch({ type: USER_REGISTER, payload: sendData.data });
      alert("Registration Done");
      history.push("/login");
      window.location.reload();
    } catch (ex) {
      // console.log(ex, "action");
      dispatch({ type: ERROR, payload: ex });
    }
  };
};
