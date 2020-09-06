import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const ContactItem = ({ contact: { name, number }, onRemoveContact }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemP}>
        {name}: {number}
      </p>
      <Button
        variant="contained"
        color="primary"
        className={styles.listItemButton}
        onClick={onRemoveContact}
        type="button"
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;
