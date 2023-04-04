import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoods = async (type: string) => {
    let goodsFromServer: React.SetStateAction<Good[]>;

    switch (type) {
      case 'all':
        goodsFromServer = await getAll();
        break;
      case 'five':
        goodsFromServer = await get5First();
        break;
      case 'red':
        goodsFromServer = await getRedGoods();
        break;
      default:
        goodsFromServer = [];
        break;
    }

    setGoods(goodsFromServer);
  };

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods('all')}
        className="button is-light"
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods('five')}
        className="button is-light"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods('red')}
        className="button is-light"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
