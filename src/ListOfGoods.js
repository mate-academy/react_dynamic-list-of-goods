import React from 'react';
import PropTypes from 'prop-types';

export function ListOfGoods({ goods }) {
  return (
    <ol>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ol>
  );
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
    }),
  ).isRequired,
};
