import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(({ id, name, color }) => (
        <li style={{ color }} key={id}>{name}</li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GoodsList;
