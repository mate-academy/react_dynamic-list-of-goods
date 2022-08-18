import React, { useState } from 'react';
import './App.scss';
import { Box, Button, Typography } from '@mui/material';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isActiveButtonLag, setIsActiveButtonLag] = useState(false);
  const [isActiveButtonL5fg, setIsActiveButtonL5fg] = useState(false);
  const [isActiveButtonLrg, setIsActiveButtonLrg] = useState(false);

  const loadAllGoods = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
    setIsActiveButtonLag(true);
    setIsActiveButtonL5fg(false);
    setIsActiveButtonLrg(false);
  };

  const load5First = async () => {
    const fiveFirst = await get5First();

    setGoods(fiveFirst);
    setIsActiveButtonLag(false);
    setIsActiveButtonL5fg(true);
    setIsActiveButtonLrg(false);
  };

  const loadRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
    setIsActiveButtonLag(false);
    setIsActiveButtonL5fg(false);
    setIsActiveButtonLrg(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: '0, auto',
      }}
    >

      <div className="App">
        <Typography
          variant="h3"
          gutterBottom
        >
          Dynamic list of Goods
        </Typography>
        <div className="Buttons">
          <Button
            variant={isActiveButtonLag
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="all-button"
            onClick={loadAllGoods}
          >
            Load all goods
          </Button>
          <Button
            variant={isActiveButtonL5fg
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="first-five-button"
            onClick={load5First}
          >
            Load 5 first goods
          </Button>
          <Button
            variant={isActiveButtonLrg
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="red-button"
            onClick={loadRedGoods}
          >
            Load red goods
          </Button>
        </div>
        <GoodsList goods={goods} />
      </div>
    </Box>
  );
};
