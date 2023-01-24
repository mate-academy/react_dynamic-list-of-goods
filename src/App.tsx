import React, { useState } from 'react';
import { Button, ButtonGroup, Paper } from '@mui/material';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleLoadButtonClick = async (callback: Promise<Good[]>) => {
    setVisibleGoods(await callback);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        // boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        // borderRadius: "25px",
      }}
    >
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            type="button"
            data-cy="all-button"
            onClick={() => handleLoadButtonClick(getAll())}
          >
            Load all goods
          </Button>

          <Button
            type="button"
            data-cy="first-five-button"
            onClick={() => handleLoadButtonClick(get5First())}
          >
            Load 5 first goods
          </Button>

          <Button
            type="button"
            data-cy="red-button"
            onClick={() => handleLoadButtonClick(getRedGoods())}
          >
            Load red goods
          </Button>
        </ButtonGroup>

        {/* <button
          type="button"
          data-cy="all-button"
          onClick={() => handleLoadButtonClick(getAll())}
        >
          Load all goods
        </button> */}

        {/* <button
          type="button"
          data-cy="first-five-button"
          onClick={() => handleLoadButtonClick(get5First())}
        >
          Load 5 first goods
        </button> */}

        {/* <button
          type="button"
          data-cy="red-button"
          onClick={() => handleLoadButtonClick(getRedGoods())}
        >
          Load red goods
        </button> */}

        <GoodsList goods={visibleGoods} />
      </div>
    </Paper>
  );
};
