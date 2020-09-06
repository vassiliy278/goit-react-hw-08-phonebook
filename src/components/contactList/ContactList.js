import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../contactItem/ContactItemContainer';

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul">
      {contacts &&
        contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames={itemMove}>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
