import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends Component {
  state = {
    goods: [],
  };

  loadGoodsFromServer = (callback) => {
    callback().then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;
    const { loadGoodsFromServer } = this;

    return (
      <>
        <button
          type="button"
          onClick={() => loadGoodsFromServer(getAll)}
        >
          Load all goods
        </button>
        <button
          type="button"
          onClick={() => loadGoodsFromServer(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => loadGoodsFromServer(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
