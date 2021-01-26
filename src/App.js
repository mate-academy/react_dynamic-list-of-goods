import React, { Component } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// or
// import * as goodsAPI from './api/goods';

export class App extends Component {
  state = {
    goods: [],
  };

  showAllGoods = () => {
    getAll()
      .then(goods => this.setState({
        goods,
      }));
  };

  show5Goods = () => {
    get5First()
      .then(goods => this.setState({
        goods,
      }));
  };

  showRedGoods = () => {
    getRedGoods()
      .then(goods => this.setState({
        goods,
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.showAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.show5Goods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />

      </div>
    );
  }
}

export default App;
