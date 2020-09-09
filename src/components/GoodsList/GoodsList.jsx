import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
    {goods.map(unit => (
      <li
        key={unit.id}
        style={{ color: unit.color }}
      >
        {unit.name}
      </li>
    ))}
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
