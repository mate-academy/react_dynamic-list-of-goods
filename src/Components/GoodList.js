import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="goods">
    {goods.map(({ name, color, id }) => (
      <li style={{ color }} key={id}>
        {name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
