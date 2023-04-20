import PropTypes from 'prop-types';

import { SVG } from '../Icons/Icons.jsx';
import { StyledButton } from 'components/Button/s-button.js';

export const ContactList = (props) => {

    const {
        contacts,
        onRemove,
       
    } = props;

    return (
        <div>
            <h3>Contacts</h3>
            <div>
                <ul>
                    {contacts.map(({ id, name, number }) => {
                        return (
                            <li key={id}>
                                <p>
                                    <span>{name}</span>
                                    <span>{number}</span>
                                </p>
                                <StyledButton
                                    type="button"
                                    onClick={() => {
                                        onRemove(id);
                                    }}
                                >
                                    <SVG
                                        width="20"
                                        height="20"
                                        name="remove"
                                    />
                                </StyledButton>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};


  
    