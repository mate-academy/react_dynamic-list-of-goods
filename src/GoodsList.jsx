import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="goodsBlock">
    <ul>
      {goods.map(item => (
        <li key={item.id} style={{ color: item.color }}>
          {item.name }
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
