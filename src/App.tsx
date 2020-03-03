import React, { Component } from 'react';
import './App.css';
import { getGoods } from './api';
import { GoodList } from './components/GoodList/GoodList';

interface State {
  goodList: Good[];
}

export class App extends Component<{}, State> {
  state = {
    goodList: [],
  };

  loadAllGoods = () => {
    getGoods()
      .then(goods => {
        this.setState({
          goodList: goods,
        });
      });
  };

  loadFirstFive = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goodList: goods
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter(good => good.id < 6),
        });
      });
  };

  loadRedGood = () => {
    getGoods()
      .then((goods) => {
        this.setState({
          goodList: goods
            .filter(good => good.color === 'red'),
        });
      });
  };

  render() {
    const { goodList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <GoodList goodList={goodList} />
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
            Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFirstFive}
        >
            Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.loadRedGood}
        >
            Load red goods
        </button>
      </div>
    );
  }
}
