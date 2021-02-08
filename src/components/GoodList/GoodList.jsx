import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ list }) => (
  <ul>
    {list.map(good => (
      <li style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  list: PropTypes.arrayOf().isRequired,
};
