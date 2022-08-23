import React, { useCallback, useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = useCallback((getFunction) => {
    getFunction().then((gods: Good[]) => setGoods(gods));
  }, []);

  return (
    <div className="App">
      <h1 className="appTitle">Dynamic list of Goods</h1>

      <Button
        type="button"
        className="button"
        data-cy="all-button"
        variant="outlined"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        className="button"
        data-cy="first-five-button"
        variant="outlined"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        className="button"
        data-cy="red-button"
        variant="outlined"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </Button>

      {goods.length > 0 && <GoodsList goods={goods} />}
    </div>
  );
};
