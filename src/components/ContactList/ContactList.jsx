import PropTypes from 'prop-types';

import { SVG } from '../Icons/Icons.jsx';
import { StyledButton } from 'components/Button/s-button.js';
import { StyledTitle, StyledFlexColumn } from 'components/styled-common.js';
import { StyledListWrapper, StyledList, StyledItem, StyledInfo } from './s-contact-list.js';


export const ContactList = (props) => {

    const {
        contacts,
        onRemove,
       
    } = props;

    return (
        <StyledFlexColumn>
            <StyledTitle>Contact List</StyledTitle>
            <StyledListWrapper>
                <StyledList>
                    {contacts.map(({ id, name, number }) => {
                        return (
                            <StyledItem key={id}>
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
                                <StyledInfo>
                                    <p>{name}</p>
                                    <Callto phone={number}>{number}</Callto>
                                </StyledInfo>
                                
                            </StyledItem>
                        );
                    })}
                </StyledList>
            </StyledListWrapper>
        </StyledFlexColumn>
    );
};

const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};

Callto.propTypes = {
    phone: PropTypes.string.isRequired,
    children: PropTypes.node  
};  
    