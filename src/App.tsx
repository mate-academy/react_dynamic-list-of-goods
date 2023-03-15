import React, { useCallback, useState } from 'react';
import './App.scss';
import { Box, Button, Typography } from '@mui/material';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good []>([]);
  const [activeButton, setActiveButton] = useState('');

  const loadByTypeOfGet = useCallback(async (loadGoods) => {
    const loadedGoods = loadGoods();

    setGoods(await loadedGoods);
    setActiveButton(`${loadGoods.name}`);
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
            variant={activeButton === 'getAll'
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="all-button"
            onClick={() => loadByTypeOfGet(getAll)}
          >
            Load all goods
          </Button>
          <Button
            variant={activeButton === 'get5First'
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="first-five-button"
            onClick={() => loadByTypeOfGet(get5First)}
          >
            Load 5 first goods
          </Button>
          <Button
            variant={activeButton === 'getRedGoods'
              ? 'contained'
              : 'outlined'}
            type="button"
            size="small"
            data-cy="red-button"
            onClick={() => loadByTypeOfGet(getRedGoods)}
          >
            Load red goods
          </Button>
        </div>
        <GoodsList goods={goods} />
      </div>
    </Box>
  );
};
