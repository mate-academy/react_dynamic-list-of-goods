import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li>
        {item.color}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
