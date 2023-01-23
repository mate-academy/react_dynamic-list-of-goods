import React, { useEffect, useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { Select } from './types/Select';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [select, setSelect] = useState<Select>(Select.all);

  const loadData = async (callback: () => Promise<Good[]>) => {
    const goodsFromServer = await callback();

    setGoods(goodsFromServer);
  };

  const handleClick = (callback: () => Promise<Good[]>, newSelect: Select) => {
    loadData(callback);
    setSelect(newSelect);
  };

  useEffect(() => {
    loadData(getAll);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="App__buttons">
        <Button
          variant={select === Select.all ? 'contained' : 'outlined'}
          type="button"
          data-cy="all-button"
          onClick={() => handleClick(getAll, Select.all)}
        >
          Load all goods
        </Button>

        <Button
          variant={select === Select.first ? 'contained' : 'outlined'}
          type="button"
          data-cy="first-five-button"
          onClick={() => handleClick(get5First, Select.first)}
        >
          Load 5 first goods
        </Button>

        <Button
          variant={select === Select.red ? 'contained' : 'outlined'}
          type="button"
          data-cy="red-button"
          onClick={() => handleClick(getRedGoods, Select.red)}
        >
          Load red goods
        </Button>
      </div>

      {goods && (<GoodsList goods={goods} />)}
      {!goods && (<p>Something wrong</p>)}

    </div>
  );
};
