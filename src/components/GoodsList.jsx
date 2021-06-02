import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goodsList }) => (
  <>
    <ul>
      {goodsList.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          <p>
            Good name:
            {good.name}
          </p>
          <p>
            Color:
            {good.color}
          </p>
          <p>
            id:
            {good.id}
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
