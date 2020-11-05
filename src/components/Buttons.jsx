import React from 'react';
import PropTypes from 'prop-types';

export function Buttons({ addAllGoods, addFiveGoods, addRedGoods }) {
  return (
    <>
      <button
        className="button"
        type="button"
        onClick={addAllGoods}
      >
        Load All goods
      </button>

      <button
        className="button"
        type="button"
        onClick={addFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        onClick={addRedGoods}
      >
        Load red goods
      </button>

    </>
  );
}

Buttons.propTypes = {
  addAllGoods: PropTypes.func.isRequired,
  addFiveGoods: PropTypes.func.isRequired,
  addRedGoods: PropTypes.func.isRequired,
};
