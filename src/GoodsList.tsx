import React from 'react';
import { Typography } from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        <Typography variant="subtitle2">
          {good.name}
        </Typography>
      </li>
    ))}
  </ul>
);
