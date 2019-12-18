import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id}>
        <Good
          name={good.name}
          color={good.color}
        />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodList;
