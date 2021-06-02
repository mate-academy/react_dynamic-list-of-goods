import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goodsList }) => (
  <>
    <ul>
      {goodsList.map(({ id, color, name }) => (
        <li key={id} style={{ color }}>
          <p>
            Good name:
            {name}
          </p>
          <p>
            Color:
            {color}
          </p>
          <p>
            id:
            {id}
          </p>
        </li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GoodsList;
