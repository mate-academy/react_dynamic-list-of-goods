import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { fetchData, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [data, setData]
   = useState<Good[]>([]);
  const [name, setName] = useState('');

  async function getData(value: string) {
    let fetchedData;

    switch (value) {
      case 'everyItem':
        fetchedData = await fetchData();
        break;
      case 'first5':
        fetchedData = await get5First();
        break;
      case 'onlyRed':
        fetchedData = await getRedGoods();
        break;

      default:
        fetchedData = await fetchData();
    }

    setData(fetchedData);
  }

  useEffect((value = 'everyItem') => {
    getData(value);
  }, []);

  const reRender = (value: string) => {
    getData(value);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        className={name === 'everyItem'
          ? 'Button-green is-on-green'
          : 'Button-green'}
        type="button"
        data-cy="all-button"
        onClick={() => {
          reRender('everyItem');
          setName('everyItem');
        }}
      >
        Load all goods
      </button>

      <button
        className={name === 'first5'
          ? 'Button-blue is-on-blue'
          : 'Button-blue'}
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          reRender('first5');
          setName('first5');
        }}
      >
        Load 5 first goods
      </button>

      <button
        className={name === 'onlyRed'
          ? 'Button-red is-on-red'
          : 'Button-red'}
        type="button"
        data-cy="red-button"
        onClick={() => {
          reRender('onlyRed');
          setName('onlyRed');
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};
