import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

enum RequestTypes {
  ALL = 'ALL',
  FIRST_FIVE = 'FIRST_FIVE',
  RED = 'RED',
}

const getGoods = (requestType: RequestTypes) => {
  if (requestType !== undefined) {
    if (requestType === RequestTypes.ALL) {
      return getAll();
    } else if (requestType === RequestTypes.FIRST_FIVE) {
      return get5First();
    } else if (requestType === RequestTypes.RED) {
      return getRedGoods();
    }
  }

  throw new Error('error');
};

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getGoods(RequestTypes.ALL).then(setGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getGoods(RequestTypes.FIRST_FIVE).then(setGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getGoods(RequestTypes.RED).then(setGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
