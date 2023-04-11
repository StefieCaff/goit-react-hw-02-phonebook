// import { nanoid } from 'nanoid'
// import { useState, useEffect } from "react"

import { ContactForm } from './ContactForm/ContactForm.jsx'

export const App = () => {

  // const [contact, setContact] = useState({ contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'}, {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'}, {id: 'id-3', name: 'Eden Clements', number: '645-17-79'}, {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, ], 
  //    filter: '');
  //  const [id, setId] = useState('');
    
  //   let nameInputId = nanoid(6);
  //   setId(nameInputId);
  
  const handleAddContact = () => {
    console.log("add");
  };

  return (
    <>
      <h1>Phone Book</h1>
       <ContactForm onAdd={handleAddContact}/>
    </>
  );
};
