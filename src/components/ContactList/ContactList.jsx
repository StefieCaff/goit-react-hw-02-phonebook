import PropTypes from 'prop-types';

import { SVG } from '../Icons/Icons.jsx';

export const ContactList = (props) => {

    const {
        contacts,
        onRemove,
        children
    } = props;

    return (
        <div>
            <h3>Contacts</h3>
            <div>
                {children}
                <ul>
                         <>
                            {contacts.map(contact => {
                                return (
                                    <li key={contact.id}>
                                        <p>
                                            <span>{contact.name}</span>
                                            <span>{contact.number}</span>
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                onRemove(contact.id);
                                            }}>
                                            <SVG
                                                width="15"
                                                height="15"
                                                name="remove"
                                            />
                                        </button>
                                    </li>
                                );
                            })}
                        </>
                    
                </ul>
            </div>
        </div>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};


  
    