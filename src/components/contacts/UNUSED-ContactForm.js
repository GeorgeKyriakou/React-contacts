// import React, { useState } from "react";
// import Checkbox from "@material-ui/core/Checkbox";

// const ContactForm = () => {
//   const [contact, setContact] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     type: "personal"
//   });

//   const { name, email, phone, type } = contact;

//   const onChange = event =>
//     setContact({ ...contact, [event.target.name]: event.target.value });

//   return (
//     <form>
//       <h2 className="text-primary">Add contact</h2>
//       <input
//         type="text"
//         placeholder="name"
//         name="name"
//         value={name}
//         onChange={onChange}
//       />
//       <input
//         type="email"
//         placeholder="email"
//         name="email"
//         value={email}
//         onChange={onChange}
//       />
//       <input
//         type="text"
//         placeholder="phone"
//         name="phone"
//         value={phone}
//         onChange={onChange}
//       />
//       <Checkbox onChange={onChange} name="type" value={type} color="primary" />{" "}
//       <label>professional</label>
//       <div>
//         <input
//           type="submit"
//           value="Submit"
//           className="btn btn-primary btn-block"
//         ></input>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
