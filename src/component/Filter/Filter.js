import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({ filter, onChange }) => (
  <div>
    <p>Find contacts by name</p>
    <label>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilterValue(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
