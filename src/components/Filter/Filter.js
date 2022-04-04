import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
