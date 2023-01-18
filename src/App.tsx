import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButtonClick = (getGoods: Promise<Good[]>) => (
    getGoods.then(setGoods)
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        type="button"
        variant="outlined"
        data-cy="all-button"
        onClick={() => handleButtonClick(getAll())}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        variant="outlined"
        data-cy="first-five-button"
        onClick={() => handleButtonClick(get5First())}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        variant="outlined"
        data-cy="red-button"
        onClick={() => handleButtonClick(getRedGoods())}
      >
        Load red goods
      </Button>

      <Button
        type="button"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => setGoods([])}
      >
        Clear
      </Button>

      <GoodsList goods={goods} />
    </div>
  );
};
