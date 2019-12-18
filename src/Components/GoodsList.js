import React from 'react';
import PropTypes from 'prop-types';
import GoodsItem from './GoodsItemIndex';

const GoodsList = ({ listOfGoods }) => (
  <ul>
    {listOfGoods.map(item => (
      <GoodsItem key={item.id} item={item} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};

export default GoodsList;
