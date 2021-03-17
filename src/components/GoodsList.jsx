import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="goodsList">
    {goods && goods.map(el => (
      <li
        key={el.id}
        style={{ color: el.color }}
      >
        {el.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};
