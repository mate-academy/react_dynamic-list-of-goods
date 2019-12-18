import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ currentGood }) => (
  <>
    <li
      className={`goods__item--${currentGood.color}`}
      key={currentGood.name}
    >
      {currentGood.name}
    </li>
    <hr />
  </>
);

Good.propTypes = { currentGood: PropTypes.oneOfType(Object).isRequired };

export default Good;
