import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import themeActions from '../../redux/theme/themeActions';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

import { Button } from '@material-ui/core';

const styles = {
  light: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    marginBottom: '5px',
  },
  dark: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    backgroundColor: 'rgb(50, 50, 50)',
    color: 'white',
    marginBottom: '5px',
  },
};

const AppBar = ({ isAuthenticated, changeTheme, theme }) => {
  let themeState = 'light';
  theme ? (themeState = 'light') : (themeState = 'dark');

  return (
    <header style={styles[themeState]}>
      <Logo />
      <Button variant="contained" color="primary" onClick={changeTheme}>
        Change theme
      </Button>

      {isAuthenticated ? <UserMenu /> : <Navigation />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  theme: contactsSelectors.getTheme(state),
});

const mapDispatchToProps = dicpatch => ({
  changeTheme: () => dicpatch(themeActions.changeTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
