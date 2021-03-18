import React from 'react';
import PropTypes from 'prop-types';

import { Good } from '../Good/Good';

export function GoodList({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <Good good={good} />
      ))}
    </ul>
  );
}

GoodList.propTypes = {
  goods: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;
