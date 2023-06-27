import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
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
        sx={{
          minHeight: '40px',
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: '100%',
            textAlign: 'center',
            color: good.color,
          }}
        >
          <ListItemText primary={good.name} />
        </Paper>
      </ListItem>
    ))}
  </List>
);
