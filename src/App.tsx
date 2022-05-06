import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';
import './App.scss';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const showGoodsList = (requirement: () => Promise<Good[]>) => {
    requirement()
      .then(filteredGoods => setGoodsList(filteredGoods));
  };

  return (
    <div className="App">
      <h1 className="App__title">Dynamic list of Goods</h1>
      <div className="App__buttons">
        <button
          type="button"
          className="App__button"
          onClick={() => showGoodsList(getAll)}
        >
          Show all goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => showGoodsList(get5First)}
        >
          Show first 5 goods
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => showGoodsList(getRedGoods)}
        >
          Show red goods
        </button>
      </div>
      <GoodsList goods={goodsList} />
    </div>
  );
};

export default App;
