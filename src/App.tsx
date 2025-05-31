import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getRedGoods, get5First, getAll } from './api/goods';
import { Good } from './types/Good';

enum Button {
  all = 'all-button',
  five = 'first-five-button',
  red = 'red-button',
}

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[] | null>(null);

  const serverFetch = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const requestValue = event.currentTarget.getAttribute('data-cy');

    switch (requestValue) {
      case Button.all:
        getAll().then(goods => setGoodsFromServer(goods));
        break;
      case Button.five:
        get5First().then(goods => setGoodsFromServer(goods));
        break;
      case Button.red:
        getRedGoods().then(goods => setGoodsFromServer(goods));
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={event => serverFetch(event)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={event => serverFetch(event)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={event => serverFetch(event)}
      >
        Load red goods
      </button>

      {goodsFromServer && <GoodsList goods={goodsFromServer} />}
    </div>
  );
};
