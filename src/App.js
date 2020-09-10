import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(promise) => {
    const goodsFromServer = await promise();

    this.setState({ goods: goodsFromServer });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={() => this.loadGoods(getAll)}
          type="button"
        >
          Load All Goods
        </button>
        <button
          onClick={() => this.loadGoods(get5First)}
          type="button"
        >
          Load 5 first
        </button>
        <button
          onClick={() => this.loadGoods(getRedGoods)}
          type="button"
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />

      </>
    );
  }
}

export default App;
