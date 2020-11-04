import React from 'react';
import PropTypes from 'prop-types';
import 'bulma';

import { get5First, getAll, getRedGoods } from '../../api/goods';

export const ButtonsGroup = ({ onClick }) => (
  <div className="buttons">
    <button
      className="button is-primary"
      type="button"
      onClick={() => onClick(getAll())}
    >
      Load All goods
    </button>
    <button
      className="button is-primary"
      type="button"
      onClick={() => onClick(get5First())}
    >
      Load 5 first goods
    </button>
    <button
      className="button is-primary"
      type="button"
      onClick={() => onClick(getRedGoods())}
    >
      Load red goods
    </button>
  </div>
);

ButtonsGroup.propTypes = {
  onClick: PropTypes.func.isRequired,
};
