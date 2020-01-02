import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contact.context";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts } = contactContext;
  const displayedContacts = filteredContacts || contacts;

  return (
    <Fragment>
      {displayedContacts &&
        displayedContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact}></ContactItem>
        ))}
    </Fragment>
  );
};
