import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App = () => (
  <div>
    <h1>Dynamic list of Goods</h1>
    <GoodsList
      getAll={getAll}
      get5First={get5First}
      getRedGoods={getRedGoods}
    />
  </div>
);

export default App;
