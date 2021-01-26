import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <div>
    <ol>
      {goods.map(good => (
        <li
          key={good.id}
          style={{
            color: `${good.color}`,
          }}
        >
          {good.name}
        </li>
      ))}
    </ol>
  </div>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
