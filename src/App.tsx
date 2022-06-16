/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState([{ id: 0, name: '', color: '' }]);

  const showAll = () => {
    getAll()
      .then(theGoods => {
        setGoods(theGoods);
      });
  };

  const showFisrtFive = () => {
    get5First().then(theGoods => {
      setGoods(theGoods);
    });
  };

  const showRed = () => {
    getRed().then(theGoods => {
      setGoods(theGoods);
    });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          showAll();
        }}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => {
          showFisrtFive();
        }}
      >
        5
      </button>

      <button
        type="button"
        onClick={() => {
          showRed();
        }}
      >
        Red
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;
