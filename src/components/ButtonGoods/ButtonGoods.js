import React from 'react';
import PropTypes from 'prop-types';

const ButtonGoods = ({ name, setGoods, title }) => (
  <div>
    <button
      type="button"
      className="button is-primary"
      onClick={async() => setGoods(await name())}
    >
      { title }
    </button>
  </div>
);

ButtonGoods.propTypes = {
  name: PropTypes.func.isRequired,
  setGoods: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export { ButtonGoods };
