import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul>
      {goods && goods.map(({ id, name, color }) => (
        <li key={id} style={{ color }}>
          {name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default GoodsList;
