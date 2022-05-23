import React, { useState } from 'react';
import './App.scss';
import { GoodList } from './components/GoodsList/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <>
      <h1 className="title">Dynamic list of Goods</h1>
      <div className="buttons-wrapper">
        <button
          className="button"
          type="button"
          onClick={() => {
            getAll()
              .then(allGoods => {
                setGoods(allGoods);
              });
          }}
        >
          All goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            get5First()
              .then(fiveFirstGoods => {
                setGoods(fiveFirstGoods);
              });
          }}
        >
          5 first goods
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            getRedGoods()
              .then((onlyRedGoods) => {
                setGoods(onlyRedGoods);
              });
          }}
        >
          Red goods
        </button>
      </div>
      <GoodList goods={goods} />
    </>
  );
};

export default App;
