import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <>
    <div className="goods__item-id">{good.id}</div>
    <div
      className="goods__item-name"
      style={{ color: good.color }}
    >
      {good.name}
    </div>
    <div className="goods__item-color">{good.color}</div>
  </>
);

Good.propTypes = {
  good: PropTypes.objectOf(PropTypes.any).isRequired,
};
