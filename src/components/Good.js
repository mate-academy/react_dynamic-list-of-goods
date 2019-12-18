import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

const Good = ({ good }) => {
  const liClass = ClassNames(
    { good: true },
    { [`good--${good.color}`]: true }
  );

  return (
    <li className={liClass}>
      {good.name}
    </li>
  );
};

Good.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

export default Good;
