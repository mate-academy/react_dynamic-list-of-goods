import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends Component {
  state = {
    goods: [],
  }

  goodsFromServer = (value) => {
    value().then((goods) => {
      this.setState({ goods });
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.goodsFromServer(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsFromServer(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.goodsFromServer(getRedGoods);
          }}
        >
          Load red goods
        </button>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;
