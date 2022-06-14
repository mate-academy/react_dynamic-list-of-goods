import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(allGoods => setGoods(allGoods));
  };

  const getFirstFive = () => {
    get5First(5).then(result => setGoods(result));
  };

  const getRed = () => {
    getRedGoods('red').then(result => setGoods(result));
  };

  return (
    <div className="container">
      <button
        className="button is-primary is-outlined"
        type="button"
        onClick={getAllGoods}
      >
        Show all goods
      </button>
      <button
        className="button is-link is-outlined"
        type="button"
        onClick={getFirstFive}
      >
        Show first five goods
      </button>
      <button
        className="button is-danger is-outlined"
        type="button"
        onClick={getRed}
      >
        Show red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
