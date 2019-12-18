import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ name, color }) => (
  <li style={{ color }}>{name}</li>
);

Good.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Good;
