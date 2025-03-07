import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Must be a valid phone number!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={styles.contactForm}>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;