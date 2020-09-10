import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div>
    <ul>
      {goods.map(item => (
        <li
          key={item.id}
          className={item.color}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};
