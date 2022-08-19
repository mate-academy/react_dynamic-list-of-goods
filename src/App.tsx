import React, { useCallback, useState } from 'react';
import './App.scss';
import { Box, Button, Typography } from '@mui/material';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);
  const [activeButton, setActiveButton] = useState('');

  const loadAllGoods = useCallback(async () => {
    const allGoods = getAll();

    setGoods(await allGoods);
    setActiveButton('load all goods');
  }, []);

  const load5First = useCallback(async () => {
    const fiveFirst = get5First();

    setGoods(await fiveFirst);
    setActiveButton('load 5 first goods');
  }, []);

  const loadRedGoods = useCallback(async () => {
    const redGoods = getRedGoods();

    setGoods(await redGoods);
    setActiveButton('load red goods');
  }, []);

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
            variant={activeButton === 'load all goods'
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
            variant={activeButton === 'load 5 first goods'
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
            variant={activeButton === 'load red goods'
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
