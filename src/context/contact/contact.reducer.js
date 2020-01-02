import * as fromActions from "../types";

export default (state, action) => {
  switch (action.type) {
    case fromActions.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case fromActions.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        )
      };
    case fromActions.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case fromActions.SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case fromActions.CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case fromActions.FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case fromActions.CLEAR_FILTERS:
      return {
        ...state,
        filteredContacts: null
      };
    default:
      return state;
  }
};
