import { useState } from "react";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ContactList searchTerm={searchTerm} />
    </div>
  );
};

export default App;