import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

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

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = {
//   fetchTodos: todosOperations.fetchTodos,
// };

export default connect(null, null)(ContactsView);
