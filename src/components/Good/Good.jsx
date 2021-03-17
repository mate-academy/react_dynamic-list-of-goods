import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <p>
    {good.name}
  </p>
);

Good.propTypes = {
  good: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Good.defaultProps = {
  good: null,
};
