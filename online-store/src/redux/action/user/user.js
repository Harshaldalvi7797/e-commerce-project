import { USER_REGISTER, ERROR, LOGIN_USER } from "./user.type";
import { userRegister, Login } from "../../api/user/register";
import { history } from "../../../helpers/history/index";

export const LoginUser = item => {
  return async dispatch => {
    try {
      let user = await Login(item);
      console.log(user);
      localStorage.setItem("currentuser", JSON.stringify(user));
      dispatch({ type: LOGIN_USER, payload: user.data });
      history.push("/home");
      window.location.reload();
    } catch (ex) {
      dispatch({ type: ERROR, payload: ex });
    }
  };
};

export const logout = () => {
  return async dispatch => {
    localStorage.removeItem("currentuser");
    dispatch({ type: "LOGOUT" });
    history.push("/login");
    window.location.reload();
  };
};

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

export const LoggedInUser = () => {
  return async dispatch => {
    try {
    } catch (ex) {
      dispatch({ type: ERROR, payload: ex });
    }
  };
};
