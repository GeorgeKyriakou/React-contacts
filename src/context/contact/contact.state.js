import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contact.context";
import contactReducer from "./contact.reducer";
import * as action from "../types";
import { string } from "postcss-selector-parser";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: "contactId 1",
        name: "name 1",
        email: "name@1.com",
        phone: "123123123",
        type: "personal"
      },
      {
        id: "contactId 2",
        name: "name 2",
        email: "name@2.com",
        phone: "123123123",
        type: "personal"
      },
      {
        id: "contactId 3",
        name: "name 3",
        email: "name@3.com",
        phone: "123123123",
        type: "professional"
      }
    ],
    current: null,
    filteredContacts: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: action.ADD_CONTACT, payload: contact });
  };

  const deleteContact = id => {
    dispatch({ type: action.DELETE_CONTACT, payload: id });
  };

  const setCurrent = contact => {
    dispatch({ type: action.SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: action.CLEAR_CURRENT });
  };

  //update contact
  const updateContact = contact => {
    dispatch({ type: action.UPDATE_CONTACT, payload: contact });
  };

  //filter contact
  const filterContacts = searchQuery => {
    dispatch({ type: action.FILTER_CONTACTS, payload: searchQuery });
  };
  //clear fiter
  const clearFilter = () => {
    dispatch({ type: action.CLEAR_FILTERS });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filteredContacts: state.filteredContacts,
        addContact,
        updateContact,
        deleteContact,
        filterContacts,
        clearFilter,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
