import React, { Component } from 'react';
import Container from '../component/Container';
import ContactForm from '../component/ContactForm';
import Filter from '../component/Filter';
import ContactList from '../component/ContactList';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class ContactsView extends Component {
  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default ContactsView;
