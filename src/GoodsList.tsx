import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List>
    {goods.map(good => (
      <ListItem
        disablePadding
        alignItems="center"
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        <ListItemText primary={good.name} />
      </ListItem>
    ))}
  </List>
);
