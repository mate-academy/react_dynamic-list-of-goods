import React from 'react';
import { GoodProps } from '../../props/GoodProps';

export const Good = ({ good, color }) => (
  <span style={{ color }}>{good}</span>
);

Good.propTypes = GoodProps;
