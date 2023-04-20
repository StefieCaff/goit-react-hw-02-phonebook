import PropTypes from 'prop-types'

import { StyledButton } from './s-button';
import { SVG } from 'components/Icons/Icons';


const Button = (props) => {
    const {
        type,
        name
}= props
  

    return (
        
        <Button
        type={type}>
            <SVG
                width="15"
                height="15"
                name={name}
            />
        </Button>

    );
};

export { Button }