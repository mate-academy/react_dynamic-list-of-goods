import React from 'react';
import PropTypes from 'prop-types';
import GoodItem from './GoodItem';

const GoodsList = ({ visibleGoods }) => (
  <ul>
    {visibleGoods.map(good => (
      <GoodItem
        good={good}
        key={good.name}
      />
    ))}
  </ul>
);

GoodsList.propTypes = {
  visibleGoods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodsList;
