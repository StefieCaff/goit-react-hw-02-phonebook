
import { useState } from "react";
import { useLocalStorage } from "./LocalStorage/local-storage.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactForm } from './ContactForm/ContactForm.jsx'
import { ContactList } from './ContactList/ContactList.jsx'
import { Filter } from './Filter/Filter.jsx'

export const App = () => {
// define states add local storage hook to save contacts to local environment
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

// add a contact that is not a duplicate based on name normalized to lowercase  
  const handleAddContact = data => {
    const normalizedContact = data.name.toLowerCase();
    const normalizedList = contacts.map(({ name }) => name.toLowerCase());
  
  !normalizedList.includes(normalizedContact)  
    ? setContacts([...contacts, data])
    : Notify.info(` Eeep, ${data.name} is already a contact.`)
  };

// get filter value  
  const handleFilterInput = (e) => {
    setFilter(e.target.value);
  };

// normalize filter and look for matching name in contacts  
  const searchContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

// look through contacts by id and delete  
  const handleRemove = (id) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    )
    Notify.success('Success! Contact deleted.')
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
