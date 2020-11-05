import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="list-group list-group-flush">
    {
      goods.map(
        item => (
          <li
            key={item.id}
            style={{ background: item.color }}
            className="list-group-item App__list"
          >
            {item.name}
          </li>
        ),
      )
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
