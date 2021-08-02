import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const ControlBox = ({ getAll, get5First, getRed }) => (
  <>
    <Button title="Load All" onClick={getAll} />
    <Button title="Load first 5" onClick={get5First} />
    <Button title="Load only red" onClick={getRed} />
  </>
);

ControlBox.propTypes = {
  getAll: PropTypes.func.isRequired,
  get5First: PropTypes.isRequired,
  getRed: PropTypes.isRequired,
};
