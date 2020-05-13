import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goodsList }) => (
  <ul className="goods__list">
    {goodsList.map(({ id, name, color }) => (
      <li
        key={id}
        className="goods__item"
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
};

export default GoodsList;
