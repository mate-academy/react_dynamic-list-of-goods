/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';

function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(({ name, id, color }) => (
        <li key={id}>
          <span style={{ color }}>{name}</span>
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      id: PropTypes.number || PropTypes.string,
    })
  ),
};

GoodsList.defaultProps = { goods: [] };

export default GoodsList;
