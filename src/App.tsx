import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleButton = async (getGoods: ()=>Promise<Good[]>) => {
    setGoods(await getGoods());
  };

  return (
    <div>
      <h1>Dynamic list of goods</h1>
      <button
        type="button"
        onClick={() => handleButton(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => handleButton(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => handleButton(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
