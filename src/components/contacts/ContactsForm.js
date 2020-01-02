import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contact.context";
import { Formik, Form, Field } from "formik";
import { TextField, Checkbox, Button } from "@material-ui/core";
import * as Yup from "yup";

const ContactsForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  useEffect(() => {
    //runs as soon as form is created ("mounted") - run onece
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const clearForm = () => {
    clearCurrent();
  };

  const NewContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    phone: Yup.number().required("Required")
  });

  return (
    <div>
      <h2 className="text-primary">
        {current ? "Edit contact" : "Add contact"}
      </h2>
      <Formik
        enableReinitialize
        initialValues={contact}
        validationSchema={NewContactSchema}
        onSubmit={(data, { setSubmitting }) => {
          if (data) {
            setSubmitting(true);
            current ? updateContact(data) : addContact(data);
            setSubmitting(false);
            clearCurrent();
          }
        }}
      >
        {({ values, isSubmitting, setFieldValue, errors, touched }) => (
          <Form>
            <div>
              <Field
                placeholder="name"
                name="name"
                type="input"
                as={TextField}
                fullWidth
                margin="normal"
                helperText={touched.name && errors.name}
                error={touched.name && !!errors.name}
              />
            </div>

            <div>
              <Field
                placeholder="email"
                name="email"
                type="input"
                as={TextField}
                fullWidth
                margin="normal"
                helperText={touched.email && errors.email}
                error={touched.email && !!errors.email}
              />
            </div>

            <div>
              <Field
                placeholder="phone"
                name="phone"
                type="input"
                as={TextField}
                fullWidth
                margin="normal"
                helperText={touched.phone && errors.phone}
                error={touched.phone && !!errors.phone}
              />
            </div>
            <div>
              <Checkbox
                onChange={e =>
                  setFieldValue(
                    "type",
                    e.target.checked ? "professional" : "personal"
                  )
                }
                checked={current && current.type === "professional"}
                name="type"
                value={values.type}
                color="primary"
              />
              <label>professional</label>
            </div>
            <div>
              <Button
                disabled={!!Object.entries(errors).length || isSubmitting}
                color="inherit"
                variant="outlined"
                type="submit"
                className="btn btn-primary btn-block"
              >
                {current ? "Update" : "Submit"}
              </Button>
            </div>
            {!!current && (
              <div>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={clearForm}
                  className="btn btn-primary btn-block"
                >
                  Clear form
                </Button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
