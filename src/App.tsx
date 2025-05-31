import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [filterGoods, setFilterGoods] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');

  function getUsers(): Promise<Good[]> {
    return fetch(
      'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
    ).then(response => {
      return response.json();
    });
  }

  useEffect(() => {
    getUsers()
      .then(goodsServer => {
        switch (filterGoods) {
          case 'all':
            setGoods(goodsServer.sort((a, b) => a.name.localeCompare(b.name)));
            break;
          case 'five':
            setGoods(goodsServer.slice(0, 5));
            break;
          case 'red':
            setGoods(goodsServer.filter(item => item.color === 'red'));
        }
      })
      .catch(() => {
        setError('Try again letter');
      });
  }, [filterGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          setFilterGoods('all');
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          setFilterGoods('five');
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFilterGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
