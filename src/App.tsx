import React, { useState } from 'react';
import './App.scss';
import 'bulma';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Select } from './types/Select';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [dataError, setDataError] = useState(false);

  const getData = async (method:Select) => {
    let data;

    try {
      switch (method) {
        case Select.all:
          data = await getAll();
          break;
        case Select.firstFive:
          data = await get5First();
          break;
        case Select.onlyRed:
          data = await getRedGoods();
          break;
        default:
          data = null;
      }

      setGoods(data);
    } catch {
      setGoods(null);
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
        onClick={() => getData(Select.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button is-primary is-light is-outlined"
        onClick={() => getData(Select.firstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button is-danger is-light is-outlined"
        onClick={() => getData(Select.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} dataError={dataError} />
    </div>
  );
};
