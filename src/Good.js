import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ name, color }) => (
  <span className={`good_${color}`}>
    {name}
  </span>
);

Good.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Good;
