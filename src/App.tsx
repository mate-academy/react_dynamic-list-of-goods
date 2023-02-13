import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getData = async (method:string) => {
    let data;

    switch (method) {
      case 'all':
        data = await getAll();
        setGoods(data);
        break;
      case 'firstFive':
        data = await get5First();
        setGoods(data);
        break;
      case 'onlyRed':
        data = await getRedGoods();
        setGoods(data);
        break;
      default:
        throw new Error('no such data');
    }
  };

  return (
    <div className="App">
      <h1 className="title is-1">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info is-light is-outlined"
        onClick={() => getData('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-primary is-light is-outlined"
        onClick={() => getData('firstFive')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-light is-outlined"
        onClick={() => getData('onlyRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
