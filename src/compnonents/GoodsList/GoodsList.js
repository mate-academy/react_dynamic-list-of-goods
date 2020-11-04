import React from 'react';
import PropTypes from 'prop-types';
import { GoodShape } from '../goodShape/GoodShape';

const GoodsList = ({ goods }) => (
  <div>
    <ul className="list-group">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list-group-item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape(GoodShape)).isRequired,
};

export default GoodsList;
