import React from 'react';
import PropTypes from 'prop-types';

const ShowGoodsBtn = ({ btnName, onClick, bulmaClass }) => (
  <button
    className={`button content__button ${bulmaClass}`}
    type="button"
    onClick={onClick}
  >
    {btnName}
  </button>
);

ShowGoodsBtn.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bulmaClass: PropTypes.string.isRequired,
};

export default ShowGoodsBtn;
