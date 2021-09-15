import React from 'react';
import { GoodsList } from './components';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => (
  <div className="App">
    <div className="list-of-goods__wrapper d-flex flex-column">
      <h1 className="w-50 text-center align-self-center">Dynamic list of Goods</h1>
      <GoodsList
        getAll={getAll}
        get5First={get5First}
        getRedGoods={getRedGoods}
      />
    </div>
  </div>
);

export default App;
