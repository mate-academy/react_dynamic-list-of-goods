import React from 'react';
import './GoodList.scss';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="goods">
    {goods.map((good) => {
      const { id, name, color } = good;

      return (
        <li
          className="goods__item"
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
