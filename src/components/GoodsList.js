import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, typeLoad }) => (
  <ul className={typeLoad}>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeLoad: PropTypes.string,
};

GoodsList.defaultProps = {
  typeLoad: '',
};
