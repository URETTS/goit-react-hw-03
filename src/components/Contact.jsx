import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <MdContactPage className="my-icon" /> {name}: <FaPhoneAlt className="my-icon" /> {number}
          <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
