import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Button, TextField } from '@material-ui/core';

const LogInPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const styles = {
    form: {
      display: 'flex',
      padding: '0 0 30px 10px',
    },
  };

  return (
    <form style={styles.form}>
      <div style={{ marginRight: '10px' }}>
        <TextField
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <TextField
          error={password.length < 1 || password.length > 6 ? false : true}
          helperText={
            password.length < 1 || password.length > 6
              ? ''
              : 'need more symbols'
          }
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {/* <br /> */}
      <Button
        style={{ height: '40px', marginTop: '30px' }}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </form>
  );
};

export default LogInPage;
