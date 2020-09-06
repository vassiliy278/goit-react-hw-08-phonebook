import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const Filter = ({ value, onChangeFilter }) => (
  <form>
    <label>
      Find contacts by name
      <br />
      <TextField
        variant="outlined"
        style={{ borderRadius: 4 }}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </label>
  </form>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
