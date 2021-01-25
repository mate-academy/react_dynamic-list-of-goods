import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item.id}>
        <span style={{ color: item.color }}>{item.name}</span>
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf({
    id: PropTypes.number.isRequire,
    color: PropTypes.string.isRequire,
    name: PropTypes.string.isRequire,
  }),
};

GoodsList.defaultProps = {
  goods: [],
};
