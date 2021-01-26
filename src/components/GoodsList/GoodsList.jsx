import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="app__list list">
    {goods.map(({ name, id, color }) => (
      <li
        key={id}
        style={{ color }}
        className="list__item"
      >
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
