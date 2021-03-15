import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <>
    <li key={good.id} style={{ color: `${good.color}` }}>
      {good.name}
    </li>
  </>
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
