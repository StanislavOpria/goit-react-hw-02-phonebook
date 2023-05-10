import PropTypes from 'prop-types';

export const Filter = ({ filterValue, onChange }) => {
  const handleChange = event => {
    onChange(event.target);
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func,
};
