import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';

import styles from './ContactForm.module.css';
import { Button, TextField } from '@material-ui/core';

const ContactForm = ({ state }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const changeNameHandler = ({ target }) => setName(target.value);

  const [number, setNumber] = useState('');
  const changeNumberHandler = ({ target }) => setNumber(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const { items } = state.contacts;

    if (items && items.find(contact => name === contact.name)) {
      alert('User with this name is already exist');
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <TextField
          style={{ borderRadius: 4 }}
          name="name"
          type="text"
          value={name}
          onChange={changeNameHandler}
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <TextField
          style={{ borderRadius: 4, marginBottom: 5 }}
          name="number"
          type="text"
          value={number}
          onChange={changeNumberHandler}
        />
      </label>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: 4, padding: 4 }}
        type="submit"
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
