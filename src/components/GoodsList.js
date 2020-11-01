import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="row p-4">
    <ul className="list-group col-3">
      {
        goods.map(({ id, name, color }) => (
          <li
            key={id}
            className="list-group-item"
            style={{ color }}
          >
            {name}
          </li>
        ))
      }
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
