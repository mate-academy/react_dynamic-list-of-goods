import PropTypes from 'prop-types';
import React from 'react';

const GoodButtons = (props) => {
  const {
    LoadRedGoods,
    Load5FirstGoods,
    LoadGoods,
    buttonHide,
  } = props;

  return (
    <section className="middle">
      <button
        type="button"
        className={buttonHide[0] === true ? 'hide' : ''}
        onClick={LoadGoods}
      >
      Load goods
      </button>
      <button
        type="button"
        onClick={Load5FirstGoods}
        className={buttonHide[1] === true ? 'hide' : ''}
      >
      Load 5 first goods
      </button>
      <button
        type="button"
        onClick={LoadRedGoods}
        className={buttonHide[2] === true ? 'hide' : ''}
      >
      Load red goods
      </button>
    </section>
  );
};

GoodButtons.propTypes = {
  LoadRedGoods: PropTypes.func.isRequired,
  Load5FirstGoods: PropTypes.func.isRequired,
  LoadGoods: PropTypes.func.isRequired,
  buttonHide: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default GoodButtons;
