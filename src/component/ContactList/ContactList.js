import { React, Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <ul className={styles.contactList}>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={name} className={styles.contactItem}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                this.props.deleteContact(id);
              }}
              className={styles.deleteBtn}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
