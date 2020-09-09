import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ name, color }) => (
  <span style={{ color }}>
    {name}
  </span>
);

Good.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
