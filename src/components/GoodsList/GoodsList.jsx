import React from 'react';
import PropTypes from 'prop-types';
import { Goods } from '../Goods';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    <Goods goods={goods} />
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
