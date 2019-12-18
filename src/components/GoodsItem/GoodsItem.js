import React from 'react';
import PropTypes from 'prop-types';

const GoodsItem = ({ item }) => (
  <li style={{ color: item.color }}>{item.name}</li>
);

export default GoodsItem;

GoodsItem.propTypes = {
  item: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
