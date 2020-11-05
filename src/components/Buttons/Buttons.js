import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';

export const Buttons = ({ callback, API }) => (
  <>
    <button
      onClick={() => callback(API.getAll)}
      type="button"
    >
      Load All goods
    </button>

    <button
      onClick={() => callback(API.get5First)}
      type="button"
    >
      Load 5 first goods
    </button>

    <button
      onClick={() => callback(API.getRedGoods)}
      type="button"
    >
      Load red goods
    </button>
  </>
);

Buttons.propTypes = {
  callback: PropTypes.func.isRequired,
  API: PropTypes.objectOf(PropTypes.func).isRequired,
};
