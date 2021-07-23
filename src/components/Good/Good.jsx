import React from 'react';
import { GoodType } from '../../types';

export const Good = ({ good }) => (
  <span
    style={{
      color: good.color,
    }}
  >
    {good.name}
  </span>
);

Good.propTypes = {
  good: GoodType.isRequired,
};
