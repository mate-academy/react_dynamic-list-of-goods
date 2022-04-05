import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const load = (func: () => Promise<Good[]>) => {
    func().then((goodsFromServer: Good[]) => setGoods(goodsFromServer));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button type="button" onClick={() => load(getAll)}>Load All</button>
      <button type="button" onClick={() => load(get5First)}>Load First 5</button>
      <button type="button" onClick={() => load(getRedGoods)}>Load Only Red</button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
