import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Good } from '../../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List>
    {goods.map(good => (
      <ListItem
        disablePadding
        key={good.id}
        data-cy="good"
        style={{
          color: good.color,
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ListItemButton
          sx={{ borderRadius: '10px' }}
        >
          <ListItemText primary={good.name} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);
