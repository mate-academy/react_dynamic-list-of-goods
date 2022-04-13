import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showGoods = (selection: () => Promise<Good[]>) => {
    selection()
      .then(selectedGoods => (
        setGoods(selectedGoods)
      ));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => showGoods(getAll)}
      >
        Show all goods
      </button>
      <button
        type="button"
        onClick={() => showGoods(get5First)}
      >
        Show first 5 goods
      </button>
      <button
        type="button"
        onClick={() => showGoods(getRedGoods)}
      >
        Show red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
