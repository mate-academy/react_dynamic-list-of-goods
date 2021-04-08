import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// or
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  changeState = (goods) => {
    this.setState({
      goods,
    });
  }

  showGoods = (promise) => {
    promise.then(this.changeState);
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
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

        <GoodsList goods={goods} />

      </div>
    );
  }
}

export default App;
