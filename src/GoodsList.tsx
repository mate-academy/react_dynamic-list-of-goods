import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <Paper
      elevation={5}
      sx={{ backgroundColor: '#fafafa' }}
    >
      <List
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 250,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        <ul>
          {goods.map(good => {
            const { id, name, color } = good;

            return (
              <ListItem
                key={id}
                style={{ color }}
                data-cy="good"
              >
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </ul>
      </List>
    </Paper>
  ),
);
