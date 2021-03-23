import React from 'react';
import PropTypes from 'prop-types';

import { Goods } from '../Goods';
import './GoodsList.scss';

export function GoodsList({ goods }) {
  return (
    <ul className="GoodsList">
      {goods.map(item => (
        <Goods key={item.id} item={item} />
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}.isRequired;
