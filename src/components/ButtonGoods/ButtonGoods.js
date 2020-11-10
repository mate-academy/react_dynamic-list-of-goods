import React from 'react';
import PropTypes from 'prop-types';

export const GoodsButton = ({ handleClick, setGoods, title }) => (
  <div>
    <button
      type="button"
      className="button is-primary"
      onClick={async() => {
        setGoods(await handleClick());
      }}
    >
      { title }
    </button>
  </div>
);

GoodsButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setGoods: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
