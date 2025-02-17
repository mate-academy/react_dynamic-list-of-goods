import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [clickAllGoods, setClickAllGoods] = useState(false);
  const [fiveGoods, setFiveGoods] = useState(false);

  function getUsers(): Promise<Good[]> {
    return fetch(
      'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
    ).then(response => response.json());
  }

  useEffect(() => {
    getUsers().then(goodsServer => {
      if (clickAllGoods) {
        setGoods(goodsServer);
      } else if (fiveGoods) {
        setGoods(goodsServer.slice(0, 5));
      }
    });
  }, [clickAllGoods, fiveGoods, goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setClickAllGoods(true);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setFiveGoods(true);
        }}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
