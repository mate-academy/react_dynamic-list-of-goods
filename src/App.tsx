import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);

  return (
    <div className="container">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={async () => {
          setPreparedGoods(await getAll());
        }}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={async () => {
          setPreparedGoods(await get5First());
        }}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={async () => {
          setPreparedGoods(await getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoods} />
    </div>
  );
};

export default App;
