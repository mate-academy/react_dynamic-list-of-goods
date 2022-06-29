import React, { useState } from 'react';
import * as goodsAPI from './api/goods';
import './App.scss';
import { GoodList } from './Components/GoodList/GoodList';
import 'bulma';

type FetchFunction = () => Promise<Good[]>;

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function getGoods(fetchFunction: FetchFunction) {
    fetchFunction()
      .then(goodsFromServer => setGoods(goodsFromServer));
  }

  return (
    <div className="container">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => {
          getGoods(goodsAPI.getAll);
        }}
        className="button"
      >
        all
      </button>

      <button
        type="button"
        onClick={() => {
          getGoods(goodsAPI.get5First);
        }}
        className="button"
      >
        5
      </button>

      <button
        type="button"
        onClick={() => {
          getGoods(goodsAPI.getRedGoods);
        }}
        className="button"
      >
        red
      </button>

      <GoodList goods={goods} />
    </div>
  );
};

export default App;
