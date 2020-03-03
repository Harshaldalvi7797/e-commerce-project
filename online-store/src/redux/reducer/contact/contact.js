import { CONTACT_SEND } from "../../action/contact/contact.type";

export const ContactSend = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_SEND:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
