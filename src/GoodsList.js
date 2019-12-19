import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ goodsArr }) => (
  <ul>
    {goodsArr.map(good => (
      <Good good={good} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodsList;
