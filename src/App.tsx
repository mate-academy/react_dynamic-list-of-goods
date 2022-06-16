import React, { useState } from 'react';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState([] as Good[]);

  const getFiveFirst = () => {
    get5First().then(res => {
      setGoods(res);
    });
  };

  const getAllGoods = () => {
    getAll().then(res => {
      setGoods(res);
    });
  };

  const getRed = () => {
    getRedGoods().then(res => {
      setGoods(res);
    });
  };

  return (
    <div className="box">
      <h1 className="subtitle is-5">Dynamic list of Goods</h1>
      <button
        className="button is-primary is-light "
        type="button"
        onClick={getFiveFirst}
      >
        Get 5 first
      </button>
      <button
        className="button is-primary is-light"
        type="button"
        onClick={getAllGoods}
      >
        Get All
      </button>
      <button
        className="button is-danger is-light"
        type="button"
        onClick={getRed}
      >
        Get Red
      </button>
      {goods.map(good => (
        <div key={good.id} style={{ color: good.color }}>
          {good.name}
        </div>
      ))}
    </div>
  );
};

export default App;
