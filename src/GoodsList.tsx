import React from 'react';
import { List, ListItem } from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {goods.map(good => (
      <ListItem
        key={good.id}
        data-cy="good"
        className={`${good.color}`}
      >
        {good.name}
      </ListItem>
    ))}
  </List>
);
