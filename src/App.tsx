import React, { Component } from 'react';
import './App.css';

import { GoodsList } from './components/GoodList';
import { getGoods } from './API';

export default class App extends Component {
  state = {
    goods: [],
  };

  loadAllGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState({ goods });
      });
  };

  loadFiveSortedGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState(({
          goods: goods
            .filter(good => good.id < 6)
            .sort((a, b) => a.name.localeCompare(b.name)),
        }));
      });
  };

  loadRedGoods = () => {
    getGoods()
      .then((goods: StateApp['goods']) => {
        this.setState(({
          goods: goods.filter(good => good.color === 'red'),
        }));
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          All goods
        </button>
        <button
          type="button"
          onClick={this.loadFiveSortedGoods}
        >
          First 5 goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGoods}
        >
          Red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
