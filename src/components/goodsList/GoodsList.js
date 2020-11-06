import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goods, cleanGoods }) => (
  <>
    <button
      onClick={cleanGoods}
      type="button"
      className="ui green basic button"
    >
      Back
    </button>

    <ul className="app__list list">
      {goods.map(({ name, id, color }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  cleanGoods: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
