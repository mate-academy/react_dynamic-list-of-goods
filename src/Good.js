import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <>
    <li
      className={`goods__item--${good.color}`}
      key={good.name}
    >
      {good.name}
    </li>
    <hr />
  </>
);

Good.propTypes = { good: PropTypes.oneOfType(Object).isRequired };

export default Good;
