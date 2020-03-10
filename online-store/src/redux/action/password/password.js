import { FORGET_PASSWORD } from "./password.type";
import { forgetpassword } from "../../api/password/password";

export const forgetPassword = data => {
  return async dispatch => {
    try {
      let user = await forgetpassword(data);
      console.log(user);
      dispatch({ type: FORGET_PASSWORD, payload: user.data });
    } catch (ex) {
      //   dispatch({ type: ERROR, payload: ex });
    }
  };
};
