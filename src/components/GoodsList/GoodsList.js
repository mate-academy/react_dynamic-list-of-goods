import React from 'react';
import './GoodsList.scss';

import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="goodsList">
    <ol>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          { good.name }
        </li>
      ))}
    </ol>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

GoodsList.defaultProps = {
  goods: [],
};
