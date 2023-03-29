import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <Button
        type="button"
        data-cy="all-button"
        variant="outline-primary"
        className="Button"
        onClick={() => {
          getAll().then(goods => setAllGoods(goods));
          setIsSelected(true);
        }}
      >
        {allGoods.length === 0 && isSelected
          ? 'Loading...'
          : 'Load all goods'}
      </Button>

      <Button
        type="button"
        data-cy="first-five-button"
        variant="outline-warning"
        className="Button"
        onClick={() => {
          get5First().then(goods => setAllGoods(goods));
          setIsSelected(true);
        }}
      >
        {allGoods.length === 0 && isSelected
          ? 'Loading...'
          : 'Load 5 first goods'}
      </Button>

      <Button
        type="button"
        data-cy="red-button"
        variant="outline-danger"
        className="Button"
        onClick={() => {
          getRedGoods().then(goods => setAllGoods(goods));
          setIsSelected(true);
        }}
      >
        {allGoods.length === 0 && isSelected
          ? 'Loading...'
          : 'Load red goods'}
      </Button>

      <GoodsList goods={allGoods} />
    </div>
  );
};
