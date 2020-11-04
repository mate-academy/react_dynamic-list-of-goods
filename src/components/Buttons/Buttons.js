import React from 'react';
import PropTypes from 'prop-types';

import { get5First, getAll, getRedGoods } from '../../api/goods';

export const Buttons = ({ onLoad }) => (
  <div className="d-flex justify-content-center mb-2">
    <button
      type="button"
      className="button btn-info ml-3"
      onClick={() => onLoad(getAll)}
    >
      Load all goods
    </button>

    <button
      type="button"
      className="button btn-info ml-3"
      onClick={() => onLoad(get5First)}
    >
      Load 5 first goods
    </button>

    <button
      type="button"
      className="button btn-info ml-3"
      onClick={() => onLoad(getRedGoods)}
    >
      Load red goods
    </button>
  </div>
);

Buttons.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
