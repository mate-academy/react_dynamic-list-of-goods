import React from 'react';
import Proptypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div className="content">
    <ul type="1">
      {goods.map(
        good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ),
      )}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: Proptypes.arrayOf(Proptypes.shape({
    color: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
  })).isRequired,
};
