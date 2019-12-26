import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contact.context";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </Fragment>
  );
};
