import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goodsList,
  getALlGoods,
  getFirstFiveGoods,
  getRedGoods }) => (
    <>
      <button
        type="button"
        onClick={getALlGoods}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={getFirstFiveGoods}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={getRedGoods}
      >
        Load red goods
      </button>
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
  getALlGoods: PropTypes.func.isRequired,
  getFirstFiveGoods: PropTypes.func.isRequired,
  getRedGoods: PropTypes.func.isRequired,
};

export default GoodsList;
