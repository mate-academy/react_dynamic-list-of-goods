import React from 'react';
import PropTypes from 'prop-types';

const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfGoods;
