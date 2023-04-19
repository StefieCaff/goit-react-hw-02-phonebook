
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { useLocalStorage } from "./LocalStorage/local-storage.js";

import { ContactForm } from './ContactForm/ContactForm.jsx'
import { ContactList } from './ContactList/ContactList.jsx'
import { Filter } from './Filter/Filter.jsx'

export const App = () => {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleAddContact = data => {
    
    setContacts([...contacts, data])
  };

  const handleFilterInput = (e) => {
    setFilter(e.target.value);
  };

  const searchContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const handleRemove = (id) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    )
  };

  return (
    <>
      <h1>Phone Book</h1>
      <ContactForm onAdd={handleAddContact} />
      <Filter
        value={filter}
        onFilter ={handleFilterInput}
      />
      <ContactList
        contacts={searchContact()}
        onRemove ={handleRemove}
      />
    </>
  );
};
