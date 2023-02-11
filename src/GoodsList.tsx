import { List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (goods.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [goods]);

  return (
    <>
      <List>
        {goods.map(good => (
          <ListItem
            key={good.id}
            data-cy="good"
            style={{ color: `${good.color}` }}
            alignItems="center"
          >
            {good.name}
          </ListItem>
        ))}
      </List>

      {
        error && 'There is no goods selected!'
      }
    </>
  );
};
