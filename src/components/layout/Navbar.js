import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
  return (
    <div className="navbar bg-primary">
      <h1 className={icon} /> {title}
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
