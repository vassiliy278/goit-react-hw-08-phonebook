import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}</span>
    <Button
      variant="contained"
      color="primary"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: null,
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
