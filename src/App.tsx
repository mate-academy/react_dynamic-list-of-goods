import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoodsFromApi = async () => {
    setGoods(await getAll());
  };

  const get5firstGoodsFromApi = async () => {
    setGoods(await get5First());
  };

  const getRedGoodsFromApi = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <div className="App">
      <button
        type="button"
        className="btn"
        onClick={getAllGoodsFromApi}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="btn"
        onClick={get5firstGoodsFromApi}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="btn"
        onClick={getRedGoodsFromApi}
      >
        Load red goods
      </button>

      <GoodsList
        goods={goods}
      />
    </div>
  );
};

export default App;
