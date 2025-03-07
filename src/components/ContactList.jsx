import Contact from "./Contact";

const ContactList = ({ contacts, searchTerm, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <Contact contacts={filteredContacts} onDeleteContact={onDeleteContact} />;
};

export default ContactList;