/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';

import { getAll } from './api/goods';
import GoodsList from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState([{ id: 0, name: '', color: '' }]);
  const [listIsVisible, setListIsVisible] = useState(false);

  const showAll = () => {
    getAll()
      .then(theGoods => {
        setGoods(theGoods);
      });
  };

  const showFisrtFive = () => {
    getAll()
      .then(theGoods => {
        const fiveGoods = theGoods.filter(good => {
          return good.id <= 5;
        });

        setGoods(fiveGoods);
      });
  };

  const showRed = () => {
    getAll()
      .then(theGoods => {
        const RedGoods = theGoods.filter(good => {
          return good.color === 'red';
        });

        setGoods(RedGoods);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          setListIsVisible(true);
          showAll();
        }}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => {
          setListIsVisible(true);
          showFisrtFive();
        }}
      >
        5
      </button>

      <button
        type="button"
        onClick={() => {
          setListIsVisible(true);
          showRed();
        }}
      >
        Red
      </button>

      {listIsVisible && (
        <GoodsList goods={goods} />
      )}
    </>
  );
};

export default App;
