import React from 'react';
import './App.css';
import GoodsList from './goodsList';
import FiveFirstGoodsList from './fiveFirsGoodsList';
import RedGoodsList from './redGoodsList';

const App = () => (
  <div className="App">
    <h1>Goods</h1>
    <div className="container">
      <section>
        <GoodsList />
      </section>

      <section>
        <FiveFirstGoodsList />
      </section>

      <section>
        <RedGoodsList />
      </section>
    </div>
  </div>
);

export default App;
