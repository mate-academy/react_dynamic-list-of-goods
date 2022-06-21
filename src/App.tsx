import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material/';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC<{}> = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const setAllGoods = () => {
    getAll().then(response => setVisibleGoods(response));
  };

  const set5Goods = () => {
    get5First().then(response => setVisibleGoods(response));
  };

  const setRedGoods = () => {
    getRedGoods().then(response => setVisibleGoods(response));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <ButtonGroup>
        <Button
          onClick={setAllGoods}
        >
          Load All goods
        </Button>

        <Button
          onClick={set5Goods}
        >
          Load 5 first goods
        </Button>

        <Button
          onClick={setRedGoods}
        >
          Load red goods
        </Button>
      </ButtonGroup>

      {visibleGoods.map((good: Good) => (
        <Box key={good.id}>
          <span
            style={{ color: good.color }}
          >
            {good.name}
          </span>
        </Box>
      ))}
    </>
  );
};

export default App;
