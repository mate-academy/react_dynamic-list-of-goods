import React from 'react';

import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.showGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.showGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.showGoods(getRedGoods)}
        >
          Load red goods
        </button>

        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}
