import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(({ name, color }) => (
      <Good name={name} key={name} color={color} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GoodsList;
