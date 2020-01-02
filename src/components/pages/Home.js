import React from "react";
import { Contacts } from "../contacts/Contacts";
import ContactsForm from "../contacts/ContactsForm";
import ContactsFilter from "../contacts/ContactsFilter";
export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactsForm />
      </div>
      <div>
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
};
