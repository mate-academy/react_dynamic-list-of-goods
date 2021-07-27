import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ButtonTypeOne = ({ onClick, buttonName }) => (
  <Button
    onClick={() => onClick()}
  >
    {buttonName}
  </Button>
);

ButtonTypeOne.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
