import React from 'react';
import { goodShape } from './goodShape';

export function Good({ good }) {
  return (
    <li style={{ color: `${good.color}` }}>
      {good.name}
    </li>
  );
}

Good.propTypes = goodShape;
