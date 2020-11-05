import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.scss';

const GoodList = ({ goods }) => (
  <ul className="content">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: `${good.color}` }}
        className={`content__${good.color || ''}  content__item`}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { GoodList };
