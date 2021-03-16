import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, message }) => (
  <ul>
    {!goods.length ? (<span>{message}</span>) : (
      goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))
    )}
  </ul>
);

GoodsList.defaultProps = {
  message: 'there are no goods for you. Do something to fix the situation',
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  message: PropTypes.string,
};
