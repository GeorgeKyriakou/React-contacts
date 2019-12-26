import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contact.context";
import contactReducer from "./contact.reducer";
import * as action from "../types";

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
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact

  //delete contact

  //update contact

  //set current contact

  //clear current contact

  //filter contact

  //clear fiter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
