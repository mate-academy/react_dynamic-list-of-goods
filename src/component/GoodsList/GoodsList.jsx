import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {
      goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
        >
          {item.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
})).isRequired;
