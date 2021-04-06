import React from 'react';
import PropTypes from 'prop-types';
import 'bulma';

export const GoodsList = ({ goods }) => (
  <div className="content is-medium">
    <ul className="goods-lists">
      {goods.map(good => (
        <li
          key={good.id}
          className="goods-list"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
