import { USER_REGISTER } from "./user.type";
import { userRegister } from "../../api/user/register";
export const UserRegister = item => {
  return async dispatch => {
    let sendData = await userRegister(item);
    console.log(sendData);
    dispatch({ type: USER_REGISTER, payload: sendData.data });
  };
};
