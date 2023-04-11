import PropTypes from 'prop-types'
import { useState } from "react"
//import { nanoid } from 'nanoid'

import { SVG } from '../Icons/Icons.jsx'

export const ContactForm = (props) => {

    const {
        onAdd
    } = props;

    const [newInput, setNewInput] = useState({ name: '', number: ''})
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newInput.name || !newInput.number) return;
            onAdd(newInput)
            setNewInput({
                name: '',
                number: ''
        })
    }

    const handleInput = (e) => {
        const { newName, value } = e.target
        setNewInput({
            ...newInput,
            [newName]: value
        })
    };

    return (
        
        <div>
            <h3>New contact</h3>
            <button
                type="submit"
                onClick={() => { }}
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
                        onChange={(e) => handleInput(e)}
                        value={newInput.name}              
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
                        onChange={(e) => handleInput(e)}
                        value={newInput.number}
                    />
                </label>
            </form>
        </div>
    );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};