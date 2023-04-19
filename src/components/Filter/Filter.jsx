import PropTypes from 'prop-types'

const Filter = (props) => {

    const {
        value,
        onFilter
    } = props;

    return (
        <div>
            <h3>Search contacts for { value }</h3>
            <input
                type="text"
                value={value}
                placeholder="search contacts"
                onChange={onFilter}
            

            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
}

export {Filter}