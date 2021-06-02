import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        style={{ color }}
        className="list-group-item"
      >
        {name}
      </li>
    ))
        }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
};
