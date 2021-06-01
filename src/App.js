import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  goodsFilter = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <GoodsList goods={goods} />

        <button
          type="button"
          onClick={
            () => this.goodsFilter(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.goodsFilter(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.goodsFilter(getRed)}
        >
          Load red goods
        </button>
      </>
    );
  }
}

export default App;
