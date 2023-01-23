import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <ListItem disablePadding key={good.id}>
        <ListItemButton
          data-cy="good"
          style={{ color: `${good.color}` }}
        >
          <ListItemText primary={good.name} />
        </ListItemButton>
      </ListItem>
    ))}
  </ul>
);
