import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const setAll = () => {
    getAll().then(products => setGoods(products));
  };

  const setFive = () => {
    get5First().then(products => setGoods(products));
  };

  const setOnlyRed = () => {
    getRedGoods().then(products => setGoods(products));
  };

  return (
    <div className="text-center">
      <div className="button-container my-4">
        <button
          className="btn btn-success"
          type="button"
          onClick={setAll}
        >
          all
        </button>
        <button
          className="btn btn-info mx-4"
          type="button"
          onClick={setFive}
        >
          5
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={setOnlyRed}
        >
          red
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
