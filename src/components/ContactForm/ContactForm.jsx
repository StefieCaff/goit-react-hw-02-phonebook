import PropTypes from 'prop-types'
import { useState } from "react"

import { SVG } from '../Icons/Icons.jsx'

export const ContactForm = ({onAdd}) => {

    // const {
    //     onAdd
    // } = props;

    // const [input, setInput] = useState({ name: '', number: ''})
    const [name, setName] = useState('');
    const [number, setNumber]= useState('');


    const handleSubmit = (e) => {
        e.preventDefault();  
        onAdd({name, number})    
        formReset();
    }

const handleChangeName = e => {
    setName(e.currentTarget.value);    
  };

  const handleChangeTel = e => {
      setNumber(e.currentTarget.value);
  };

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    const formReset = () => {
        // setInput('');
        setName('');
        setNumber('')
  };

    return (
        
        <div>
            <h3>New contact</h3>
            <button
                type="submit"
                onClick={(e) => {handleSubmit(e)}}
            >
                <SVG
                    width="20"
                    height="20"
                    name="add"
                />
            </button>
            <form onSubmit={handleSubmit}>
                <label id="name">
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                        placeholder="contact name"
                        required
                        autoFocus={true}
                        onChange={handleChangeName}
                        value={name}              
                        />
                </label>
                <label id="tel">
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder="contact phone"
                        onChange={handleChangeTel}
                        value={number}
                    />
                </label>
            </form>
        </div>
    );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};