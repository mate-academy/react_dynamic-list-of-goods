import React from 'react';
import PropTypes from 'prop-types';

export const GoodsForm = ({
  getAllGoods,
  get5FirstGoods,
  getRedGoods,
  classes,
}) => (
  <form className="field is-grouped is-grouped-centered">
    <button
      type="button"
      className={classes}
      onClick={getAllGoods}
    >
      Load all goods
    </button>
    <button
      type="button"
      className={classes}
      onClick={get5FirstGoods}
    >
      Load 5 first goods
    </button>
    <button
      type="button"
      className={classes}
      onClick={getRedGoods}
    >
      Load red goods
    </button>
  </form>
);

GoodsForm.propTypes = {
  getAllGoods: PropTypes.func.isRequired,
  get5FirstGoods: PropTypes.func.isRequired,
  getRedGoods: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
};
