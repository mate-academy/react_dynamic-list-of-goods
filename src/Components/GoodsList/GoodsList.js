import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

const GoodsList = ({ goods }) => (
  <ul>
    {
      goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isReqired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default GoodsList;
