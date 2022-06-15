/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './component/GoodsList';

const App: React.FC<{}> = () => {
  const [goods, setGoods] = useState([]);

  return (
    <div className="box">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button is-success"
        type="button"
        onClick={async () => (
          setGoods(await getAll()))}
      >
        All
      </button>
      <button
        className="button is-warning"
        type="button"
        onClick={async () => (
          setGoods(await get5First()))}
      >
        5
      </button>
      <button
        className="button is-danger"
        type="button"
        onClick={async () => (
          setGoods(await getRedGoods()))}
      >
        Red
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;
