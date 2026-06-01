import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { Tabs } from './Tabs'; // імпортуй свій Tabs

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    setGoods(await getAllGoods());
  };

  const handleLoad5First = async () => {
    setGoods(await get5FirstGoods());
  };

  const handleLoadRed = async () => {
    setGoods(await getRedGoods());
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>Dynamic Goods List</h1>

              <button onClick={handleLoadAll}>Load All goods</button>
              <button onClick={handleLoad5First}>Load 5 first goods</button>
              <button onClick={handleLoadRed}>Load red goods</button>

              <GoodsList goods={goods} />
            </div>
          }
        />

        <Route path="/tabs" element={<Tabs />} />
        <Route path="/tabs/:tabId" element={<Tabs />} />
      </Routes>
    </HashRouter>
  );
};
