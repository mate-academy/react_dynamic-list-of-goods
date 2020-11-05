import React from 'react';
import propTypes from 'prop-types';

export const Buttons = ({ getList, getfilteredList, name }) => (
  <>
    <button
      type="button"
      className="button is-primary is-large"
      onClick={() => getList(getfilteredList)}
    >
      {name.toUpperCase()}
    </button>
  </>
);

Buttons.propTypes = {
  getList: propTypes.func.isRequired,
  getfilteredList: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
