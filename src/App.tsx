import React, { Component } from 'react';
import './App.css';

import { GoodsList } from './GoodsList/GoodsList';
import { getGoods } from './API/API';
import { Good } from './types';

interface State {
  goods: Good[];
}

export default class App extends Component<{}, State> {
  state = {
    goods: [],
  };

  showGoods = () => {
    getGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  showFirstFive = () => {
    getGoods()
      .then((goods) => {
        this.setState(({
          goods: goods
            .filter(good => good.id < 6)
            .sort((a, b) => a.name.localeCompare(b.name)),
        }));
      });
  };

  showRed = () => {
    getGoods()
      .then((goods) => {
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
          onClick={this.showGoods}
        >
          All goods
        </button>
        <button
          type="button"
          onClick={this.showFirstFive}
        >
          First 5 goods
        </button>
        <button
          type="button"
          onClick={this.showRed}
        >
          Red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
