import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [dataError, setDataError] = useState(false);

  const getData = async (method:() => Promise<Good[]>) => {
    try {
      const data = await method();

      setGoods(data);
    } catch {
      setGoods([]);
      setDataError(true);
    }
  };

  return (
    <div className="App">
      <h1 className="title is-1">Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button is-info is-light is-outlined"
        onClick={() => getData(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-primary is-light is-outlined"
        onClick={() => getData(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-light is-outlined"
        onClick={() => getData(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} dataError={dataError} />
    </div>
  );
};
