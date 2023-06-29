import React from 'react';
import classNames from 'classnames';
import { List, ListItem, ListItemText } from '@mui/material';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <List>
    {goods.map(good => (
      <ListItem
        key={good.id}
        data-cy="good"
        className={classNames({
          redGood: good.color === 'red',
          greenGood: good.color === 'green',
          blueGood: good.color === 'blue',
        })}
      >
        <ListItemText primary={good.name} />
      </ListItem>
    ))}
  </List>
);
