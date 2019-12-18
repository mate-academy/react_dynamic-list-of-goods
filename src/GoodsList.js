import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ visibleGoods }) => (
  <ul
    className="goods__list"
  >
    {visibleGoods.map(oneGood => (
      <Good currentGood={oneGood} />
    ))}
  </ul>
);

GoodsList.propTypes = { visibleGoods: PropTypes.oneOfType(Array).isRequired };

export default GoodsList;
