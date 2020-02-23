import { USER_REGISTER } from "./user.type";
import {} from "../../api/user/register";
export const userRegister = item => {
  return async dispatch => {
    let sendData = userRegister(item);
    console.log(sendData);
    dispatch({ type: USER_REGISTER, payload: sendData.data });
  };
};
