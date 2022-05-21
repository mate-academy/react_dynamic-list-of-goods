import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './Components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [localGoods, setLocalGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const allGoodsFromServer = await getAll();

    setLocalGoods(allGoodsFromServer);
  };

  const getFirst5 = async () => {
    const first5 = await get5First();

    setLocalGoods(first5);
  };

  const getRed = async () => {
    const redGoods = await getRedGoods();

    setLocalGoods(redGoods);
  };

  return (
    <div className="api">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        className="button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button"
        onClick={getFirst5}
      >
        Load first 5 goods
      </button>

      <button
        type="button"
        className="button"
        onClick={getRed}
      >
        Load red goods
      </button>
      <GoodsList goods={localGoods} />
    </div>
  );
};

export default App;
