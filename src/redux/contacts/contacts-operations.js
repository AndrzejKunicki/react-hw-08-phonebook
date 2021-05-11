import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
