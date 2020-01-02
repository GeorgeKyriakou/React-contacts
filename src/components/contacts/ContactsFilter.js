import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contact.context";

const ContactsFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filteredContacts } = contactContext;

  const text = useRef("");
  useEffect(() => {
    if (filterContacts === null) {
      text.current.value = "";
    }
    return () => {
      // cleanup;
    };
  }, [filteredContacts]);

  const onChange = event => {
    event.preventDefault();
    if (text.current.value !== "") {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="search..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactsFilter;
