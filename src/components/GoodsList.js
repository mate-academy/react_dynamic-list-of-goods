import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <Good key={item.id} good={item} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default GoodsList;
