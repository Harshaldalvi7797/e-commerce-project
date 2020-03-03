import { CONTACT_SEND, SHOW_ERROR } from "./contact.type";
import { Contact } from "../../api/contact/contact";

export const ContactSend = () => {
  return async dispatch => {
    try {
      let response = await Contact();
      console.log(response);
      setTimeout(() => {
        dispatch({ type: CONTACT_SEND, payload: response.data });
      });
    } catch (ex) {
      dispatch({ type: SHOW_ERROR, payload: ex });
    }
  };
};

// export const ContactSend = () => {
//   return async dispatch => {
//     let response = await Contact();
//     console.log(response);

//     dispatch({ type: CONTACT_SEND, payload: response.data });
//   };
// };
