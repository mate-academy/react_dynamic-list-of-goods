import React, { useState } from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

//
// or
// import * as goodsAPI from './api/goods';
// const loadAll = async() => {
//   const all = await getAll();
//   return all;
// };

const App = () => {
  const [goods, loadGoods] = useState([]);

  const loadAll = () => {
    getAll()
      .then((units) => {
        loadGoods([...units]);
      });
  };

  const load5First = () => {
    get5First()
      .then(units => loadGoods([...units]));
  };

  const loadRed = () => {
    getRed()
      .then((units) => {
        loadGoods([...units]);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <ul>
        <GoodsList goods={goods} />
      </ul>
      <button type="button" onClick={loadAll}>
        Load all goods
      </button>
      <button type="button" onClick={load5First}>
        Load 5 first
      </button>
      <button type="button" onClick={loadRed}>
        Load red
      </button>
    </>
  );
};

export default App;
