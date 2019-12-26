import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contact.context";
import { Formik, Form, Field, useField } from "formik";
import { TextField, Checkbox, Button } from "@material-ui/core";
import * as Yup from "yup";

const NumberField = props => {
  const [fields, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : "";
  return <TextField {...fields} helperText={errText} />;
};

const ContactsForm = () => {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const NewContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    phone: Yup.number().required("Required")
  });

  const onSubmit = data => {
    console.log({ data });

    setContact({ ...contact, data });
  };

  return (
    <div>
      <h2 className="text-primary">Add contact</h2>
      <Formik
        initialValues={contact}
        validationSchema={NewContactSchema}
        onSubmit={(data, { setSubmitting }) => {
          if (data) {
            setSubmitting(true);
            onSubmit(data); //assume an async call here
            setSubmitting(false);
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
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
