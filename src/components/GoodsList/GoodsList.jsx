import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => {
  if (goodsList.length === 0) {
    return (
      <p>Please press the load button</p>
    );
  }

  return (
    <ul>
      {goodsList.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
};
