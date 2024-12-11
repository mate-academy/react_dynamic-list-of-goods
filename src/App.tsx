import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const button = event.target as HTMLElement;
    const buttonAtribute: string | null = button.getAttribute('data-cy');

    if (buttonAtribute === 'all-button') {
      getAll().then(data => {
        setGoodsFromServer(data);
      });
    }

    if (buttonAtribute === 'first-five-button') {
      get5First().then(data => {
        setGoodsFromServer(data);
      });
    }

    if (buttonAtribute === 'red-button') {
      getRedGoods().then(data => {
        setGoodsFromServer(data);
      });
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClick}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleClick}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClick}>
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};
