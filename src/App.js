import React from 'react';

import './App.scss';
import { GoodList } from './GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (func) => {
    func()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load 5 First Goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load Red Goods
        </button>
        <GoodList goods={goods} />
      </>
    );
  }
}
