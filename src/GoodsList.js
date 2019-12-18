import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <Good
        good={good}
      />
    ))}
  </ul>
);

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.object).isRequired };

export default GoodsList;
