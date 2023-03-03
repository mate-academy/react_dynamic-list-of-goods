import React from 'react';
import { List, ListItem } from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List className="list">
    {goods.map(good => (
      <ListItem
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </ListItem>
    ))}
  </List>
);
