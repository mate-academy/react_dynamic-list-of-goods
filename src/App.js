import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  requestGoods = (goodsFromRequest) => {
    goodsFromRequest()
      .then((goods) => {
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
          onClick={() => this.requestGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.requestGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.requestGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
