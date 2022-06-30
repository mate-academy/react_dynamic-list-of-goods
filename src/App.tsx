import React, { useState } from 'react';
import 'bulma';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const getAllGoods = async () => {
    setGoodsList(await getAll());
  };

  const getFirst5Goods = async () => {
    setGoodsList(await get5First());
  };

  const getAllRedGoods = async () => {
    setGoodsList(await getRedGoods());
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <div className="button button-group">
        <button
          className="is-link"
          type="button"
          onClick={getAllGoods}
        >
          Get All
        </button>

        <button
          className="is-link"
          type="button"
          onClick={getFirst5Goods}
        >
          5
        </button>

        <button
          className="is-link"
          type="button"
          onClick={getAllRedGoods}
        >
          Red
        </button>
      </div>

      <div>
        <GoodsList goodsList={goodsList} />
      </div>
    </>
  );
};

export default App;
