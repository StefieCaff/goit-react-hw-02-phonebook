
import { useState } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm.jsx'
import { ContactList } from './ContactList/ContactList.jsx'

export const App = () => {

  const [contacts, setContact] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Granger', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  });

  const [id, setId] = useState('');

  const handleAddContact = () => {
    let nameInputId = nanoid(6);
    setId(nameInputId);
    setContact(({ contacts }) => ({
       contacts: contacts.push(contacts => contacts.value),
    }))
  };

  const handleRemove = (id) => {
    setContact(({ contacts }) => ({
       contacts: contacts.filter(contact => contact.id !== id),
    }));
  }

  return (
    <>
      <h1>Phone Book</h1>
      <ContactForm onAdd={handleAddContact} />

      <ContactList
        contacts={contacts.contacts}
        onRemove ={handleRemove}
      />
    </>
  );
};
