import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = async (inputGoods: () => Promise<Good[]>) => {
    const response = await inputGoods();

    setGoods(response);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <div>
        <button
          type="button"
          onClick={() => getGoods(getAll)}
        >
          All goods
        </button>
        <button
          type="button"
          onClick={() => getGoods(get5First)}
        >
          5 first goods
        </button>
        <button
          type="button"
          onClick={() => getGoods(getRed)}
        >
          Red goods
        </button>
      </div>
      <ul>
        <GoodsList
          goods={goods}
        />
      </ul>
    </>
  );
};

export default App;
