import React from 'react';
import PropTypes from 'prop-types';
import GoodsItem from '../GoodsItem';

const GoodsList = ({ listOfGoods }) => (
  <ul>
    {listOfGoods.map(item => (
      <GoodsItem key={item.id} item={item} />
    ))}
  </ul>
);

export default GoodsList;

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
