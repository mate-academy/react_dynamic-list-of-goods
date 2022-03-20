import React, { useState } from 'react';
import './App.scss';

import { Good } from './react-app-env';

import { GoodsList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    const preparedGoods = await getAll();

    return setGoods(preparedGoods);
  };

  const getFive = async () => {
    const preparedGoods = await get5First();

    return setGoods(preparedGoods);
  };

  const getRed = async () => {
    const preparedGoods = await getRedGoods();

    return setGoods(preparedGoods);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}

      <button type="button" onClick={getAllGoods}>Load All goods</button>
      <button type="button" onClick={getFive}>Load 5 first goods</button>
      <button type="button" onClick={getRed}>Load red goods</button>
    </>
  );
};

export default App;
