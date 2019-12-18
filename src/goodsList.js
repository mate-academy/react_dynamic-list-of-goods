import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item.name} className={item.color}>
        {item.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes
  = {
    goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default GoodsList;
