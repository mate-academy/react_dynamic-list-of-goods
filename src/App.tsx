import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import './App.scss'; // або де у тебе стилі

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadAll = async () => {
    setLoading(true);
    const data = await getAll();

    setGoods(data);
    setLoading(false);
  };

  const handleLoad5First = async () => {
    setLoading(true);
    const data = await get5First();

    setGoods(data);
    setLoading(false);
  };

  const handleLoadRed = async () => {
    setLoading(true);
    const data = await getRedGoods();

    setGoods(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Dynamic Goods List</h1>

      <div className="buttons">
        <button onClick={handleLoadAll}>Load All goods</button>
        <button onClick={handleLoad5First}>Load 5 first goods</button>
        <button onClick={handleLoadRed}>Load red goods</button>
      </div>

      {loading ? <p>Loading...</p> : <GoodsList goods={goods} />}
    </div>
  );
};
