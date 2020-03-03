import React, { Component } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { getGoods } from './serverData';

interface AppState {
  goods: Goods;
}

export class App extends Component<{}, AppState> {
  state = {
    goods: [],
  };

  handleLoadAll = () => {
    getGoods()
      .then((goods: AppState['goods']) => {
        this.setState({ goods });
      });
  };

  handleLoadFive = () => {
    getGoods()
      .then((goods: AppState['goods']) => {
        this.setState(({
          goods: goods
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(good => good.id <= 5),
        }));
      });
  };

  handleLoadRed = () => {
    getGoods()
      .then((goods: AppState['goods']) => {
        this.setState(({
          goods: goods.filter(good => good.color === 'red'),
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.handleLoadAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.handleLoadFive}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.handleLoadRed}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
