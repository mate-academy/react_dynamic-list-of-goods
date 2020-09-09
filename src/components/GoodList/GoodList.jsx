import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';
import './GoodList.scss';

export const GoodList = ({ goods }) => (
  <div className="goods">
    <ul className="goods__list">
      {goods.map(good => (
        <li
          className="goods__item"
          key={good.id}
        >
          <Good {...good} />
        </li>
      ))}
    </ul>
  </div>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

GoodList.defaultProps = {
  goods: [],
};
