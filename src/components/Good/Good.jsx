import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ name }) => (
  <span>{name}</span>
);

Good.propTypes = {
  name: PropTypes.string.isRequired,
};
