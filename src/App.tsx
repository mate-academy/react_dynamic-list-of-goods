import React, { useState } from 'react';
import { GoodList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// // or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  return (
    <div className="App content is-large has-text-centered">
      <h1 className="title is-2 mt-2 mb-0">Dynamic list of Goods</h1>
      <GoodList goods={selectedGoods} />

      <button
        type="button"
        className="button is-medium is-primary mx-2"
        onClick={async () => setSelectedGoods(await getAll())}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="button is-medium is-link mx-2"
        onClick={async () => setSelectedGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button is-medium is-danger mx-2"
        onClick={async () => setSelectedGoods(await getRedGoods())}
      >
        Load red goods
      </button>

    </div>
  );
};

export default App;
