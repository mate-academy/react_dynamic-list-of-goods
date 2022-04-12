import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (fetchFunction: () => Promise<Good[]>) => {
    fetchFunction()
      .then(usersFromServer => setGoods(usersFromServer));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        Get All
      </button>
      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        Get Five
      </button>
      <button
        type="button"
        onClick={() => getGoods(getRedGoods)}
      >
        Get Red
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

export default App;
