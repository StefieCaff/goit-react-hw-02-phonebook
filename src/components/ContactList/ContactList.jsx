import PropTypes from 'prop-types';

import { SVG } from '../Icons/Icons.jsx';

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
                                <button
                                    type="button"
                                    onClick={() => {
                                        onRemove(id);
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
                </ul>
            </div>
        </div>
    );
};


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};


  
    