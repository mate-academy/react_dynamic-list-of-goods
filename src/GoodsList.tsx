import React, { memo } from 'react';
import List from '@mui/material/List';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <List
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </List>
    ))}
  </ul>
));
