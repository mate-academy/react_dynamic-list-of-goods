import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List>
    {goods.map(good => (
      <ListItem
        key={good.id}
        data-cy="good"
        className={`color-${good.color}`}
      >
        {good.name}
      </ListItem>
    ))}
  </List>
);
