import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ list }) {
  return (
    <ul>
      {list.map(el => (
        <li
          key={el.id}
          style={{ color: el.color }}
        >
          {el.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsList;
