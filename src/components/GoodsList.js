import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
    {goods.length > 0 && (
      <div className="box">
        <ul>
          {goods.map(good => (
            <li
              key={good.id}
              style={{ color: good.color }}
            >
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    )}
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object),
};

GoodsList.defaultProps = {
  goods: [],
};
