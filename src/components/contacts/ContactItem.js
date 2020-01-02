import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contact.context";
import { Button } from "@material-ui/core";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent } = contactContext;

  const { name, id, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  const onEdit = () => {
    setCurrent(contact);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === "professional" ? "badge-success" : "badge-primary"
          }`}
        >
          {type}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <div>
        <Button color="secondary" variant="outlined" onClick={onDelete}>
          Delete
        </Button>
        <Button color="primary" variant="outlined" onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
