import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAllGoods, get5Goods, getRedGoods } from './api/goods';
import { Good } from './react-app-env';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAll = () => {
    getAllGoods().then(result => setGoods(result));
  };

  const getFive = () => {
    get5Goods(5).then(result => setGoods(result));
  };

  const getRed = () => {
    getRedGoods('red').then(result => setGoods(result));
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        type="button"
        onClick={getAll}
      >
        Load All goods
      </button>
      <button
        className="btn btn-success"
        type="button"
        onClick={getFive}
      >
        Load 5 first goods
      </button>
      <button
        className="btn btn-info"
        type="button"
        onClick={getRed}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
