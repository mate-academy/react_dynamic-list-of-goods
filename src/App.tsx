import React, { useState } from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const goodsFromServer = async (getGoods: ()=>Promise<Good[]>) => {
    setGoods(await getGoods());
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        onClick={() => goodsFromServer(getAll)}
        type="button"
      >
        All goods
      </button>
      <button
        onClick={() => goodsFromServer(get5First)}
        type="button"
      >
        5 first goods(by name)
      </button>
      <button
        onClick={() => goodsFromServer(getRedGoods)}
        type="button"
      >
        Red goods
      </button>
      <GoodList goods={goods} />
    </>
  );
};

export default App;
