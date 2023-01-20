/* eslint-disable max-len */
import React, { useState } from 'react';
import './App.scss';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleClick = async (callback: () => Promise<Good[]>) => {
    const visibleGoods = await callback();

    setGoodsList(visibleGoods);
  };

  const buttons = [
    <Button
      type="button"
      data-cy="all-button"
      onClick={() => handleClick(getAll)}
    >
      Load all goods
    </Button>,
    <Button
      type="button"
      data-cy="first-five-button"
      onClick={() => handleClick(get5First)}
    >
      Load 5 first goods
    </Button>,
    <Button
      type="button"
      data-cy="red-button"
      onClick={() => handleClick(getRedGoods)}
    >
      Load red goods
    </Button>,
  ];

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>

        <GoodsList goods={goodsList} />
      </Box>
    </div>
  );
};
