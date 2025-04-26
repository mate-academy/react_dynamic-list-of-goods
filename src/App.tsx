import React, { useState } from 'react';
import GoodsList from './GoodsList';
import { getAllGoods, getFirstFiveGoods, getRedGoods, Good } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const allGoods = await getAllGoods();
    setGoods(allGoods);
  };

  const loadFirstFiveGoods = async () => {
    const firstFiveGoods = await getFirstFiveGoods();
    setGoods(firstFiveGoods);
  };

  const loadRedGoods = async () => {
    const redGoods = await getRedGoods();
    setGoods(redGoods);
  };

  return (
    <div>
      <h1>Dynamic List of Goods</h1>
      <div>
        <button onClick={loadAllGoods}>Load All goods</button>
        <button onClick={loadFirstFiveGoods}>Load 5 first goods</button>
        <button onClick={loadRedGoods}>Load red goods</button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
