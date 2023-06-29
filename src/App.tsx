import React, { useState } from 'react';
import './App.scss';
import { Button } from '@mui/material';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good, ApiCall } from './types/Good';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [selected, setSelected] = useState('');

  const handleClick = async (apiCall: ApiCall, buttonName: string) => {
    try {
      const goods = await apiCall();

      setGoodsList(goods);
      setSelected(buttonName);
    } catch (error) {
      throw new Error('No data was found!');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <Button
        type="button"
        variant="contained"
        data-cy="all-button"
        onClick={() => handleClick(getAll, 'all')}
        disabled={selected === 'all'}
      >
        Load all goods
      </Button>

      <Button
        type="button"
        variant="contained"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First, 'firstFive')}
        disabled={selected === 'firstFive'}
      >
        Load 5 first goods
      </Button>

      <Button
        type="button"
        variant="contained"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods, 'getByColor')}
        disabled={selected === 'getByColor'}
      >
        Load red goods
      </Button>
      <GoodsList goods={goodsList} />
    </div>
  );
};
