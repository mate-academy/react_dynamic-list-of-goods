import React, { Component } from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
  state = {
    goods: [],
  }

  getGoodsFromServer = (action) => {
    action().then((goods) => {
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
            this.getGoodsFromServer(getAll);
          }}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getGoodsFromServer(get5First);
          }}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => {
            this.getGoodsFromServer(getRedGoods);
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
