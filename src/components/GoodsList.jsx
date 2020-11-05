import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul className="ui middle aligned animated list">
    {goods.map(good => (
      <div className="item">
        <div className="content">
          <li
            className="header"
            style={{ color: `${good.color}` }}
          >
            {good.name}
          </li>
        </div>
      </div>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsList;
