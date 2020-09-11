import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

const App = () => {
  const [goods, loadGoods] = useState([]);

  const load = (func) => {
    func()
      .then(units => loadGoods([...units]));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <ul>
        <GoodsList goods={goods} />
      </ul>
      <button type="button" onClick={() => load(getAll)}>
        Load all goods
      </button>
      <button type="button" onClick={() => load(get5First)}>
        Load 5 first
      </button>
      <button type="button" onClick={() => load(getRed)}>
        Load red
      </button>
    </>
  );
};

export default App;
