import React from 'react';
import { ListGoods } from './api/ListGoods';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App = () => (
  <>
    <h1>Dynamic list of Goods</h1>
    <ListGoods />
  </>
);

export default App;
