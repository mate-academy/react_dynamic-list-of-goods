import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => (
  <main className="App box">
    <h1 className="title">
      List of goods
    </h1>
    <GoodsList
      onAll={getAll}
      on5First={get5First}
      onRed={getRedGoods}
    />
  </main>
);

export default App;
