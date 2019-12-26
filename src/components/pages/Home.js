import React from "react";
import { Contacts } from "../contacts/Contacts";
import ContactsForm from "../contacts/ContactsForm";

export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactsForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
