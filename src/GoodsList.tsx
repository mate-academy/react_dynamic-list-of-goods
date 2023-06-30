import React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
} from '@mui/material';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List
    component="nav"
    aria-label="mailbox folders"
  >
    {goods.map(good => (
      <>
        <ListItem
          className={`${good.color}`}
          key={good.id}
          data-cy="good"
        >
          <ListItemText
            primary={good.name}
          />
        </ListItem>
        <Divider />
      </>
    ))}
  </List>
);
