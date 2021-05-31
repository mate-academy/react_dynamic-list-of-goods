import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <div className="goods">
    <ul className="goods__list">
      {goods.map(good => (
        <li
          className="goods__item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

GoodsList.defaultProps = {
  goods: [],
};
