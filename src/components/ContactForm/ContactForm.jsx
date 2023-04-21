import PropTypes from 'prop-types'
import { useState } from "react"
import { nanoid } from 'nanoid';

/* styled components*/
import { SVG } from 'components/Icons/Icons'; 
import { StyledButton } from 'components/Button/s-button.js';
import { StyledForm, StyledInput } from './s-contact-form';
import { StyledFlexColumn, StyledFlex } from 'components/styled-common';
import { StyledTitle } from 'components/styled-common';


export const ContactForm = ({ onAdd }) => {
//set states for form reset and to capture input values    
    const [name, setName] = useState('');
    const [number, setNumber]= useState('');

// click event handlers input changes and for submit
    const handleChangeName = e => {
        setName(e.target.value);    
    };

    const handleChangeTel = e => {
        setNumber(e.target.value);
    };
     
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const data = ({ id: nanoid(6), name: name, number: number });
        onAdd(data)
        formReset();
    }

// helper function to reset form    
    const formReset = () => {
        setName('');
        setNumber('')
    };

    return (
        
        <StyledFlexColumn>
            <StyledTitle>Add a contact</StyledTitle>
            <StyledFlex>
            <StyledForm onSubmit={handleSubmit}>
                <StyledButton
                    style={{padding:5}}
                    type="submit"
                    onClick={(e) => {handleSubmit(e)}}
                >
                    <SVG
                        width="20"
                        height="20"
                        name="add"
                    />
                    </StyledButton>
                    <StyledFlex> 
                        <label id="name">
                       
                    <StyledInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                        placeholder="contact name"
                        required
                        autoFocus={true}
                        onChange={handleChangeName}
                        value={name} 
                        maxLength="30"
                        />
                </label>
                <label id="tel">
                    <StyledInput
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder="contact phone"
                        onChange={handleChangeTel}
                        value={number}
                        maxLength="15"
                    />
                    </label>
                </StyledFlex>
                {/* <StyledButton
                    style={{padding:5}}
                    type="submit"
                    onClick={(e) => {handleSubmit(e)}}
                >
                    <SVG
                        width="20"
                        height="20"
                        name="add"
                    />
                 </StyledButton> */}
                </StyledForm>
            </StyledFlex>
        </StyledFlexColumn>
    );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};