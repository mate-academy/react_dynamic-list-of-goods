import React, { useState } from 'react';
import './App.scss';
import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';
import GoodsList from './components/GoodsList';
import Button from './components/Button';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = async (func: () => void) => {
    switch (func) {
      case get5First:
        setGoods(await get5First());
        break;
      case getRedGoods:
        setGoods(await getRedGoods());
        break;
      default:
        setGoods(await getAll());
        break;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <Button
        text="Load All goods"
        funcName={() => getGoods(getAll)}
      />
      <Button
        text="Load 5 first goods"
        funcName={() => getGoods(get5First)}
      />
      <Button
        text="Load red goods"
        funcName={() => getGoods(getRedGoods)}
      />
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
