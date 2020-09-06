import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsOperations from '../../redux/contacts/contactsOperations';
import styles from '../App.module.css';
import ContactForm from '../contactForm/ContactFormContainer';
import Filter from '../filter/FilterContainer';
import ContactList from '../contactList/ContactListContainer';

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div style={{ paddingLeft: '20px' }}>
        <ContactForm />
        {contacts && contacts.length > 1 && <Filter />}
        <h2 className={styles.sectionTitle}>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = dicpatch => ({
  onFetchContacts: () => dicpatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
