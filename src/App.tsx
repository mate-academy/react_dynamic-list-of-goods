import React, { Component } from 'react';
import './App.css';
import { GoodsList } from './GoodsList/GoodsList';
import { Good, getGoods } from './api';


interface State {
  listOfGoods: Good[];
}

export class App extends Component<{}, State> {
  state: State = {
    listOfGoods: [],
  };

  loadAllGoods = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods,
      });
    });
  };

  loadFirstFiveGood = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods.filter((good: { id: number }) => good.id <= 5),
      });
    });
  };

  loadRedGood = () => {
    getGoods().then(goods => {
      this.setState({
        listOfGoods: goods.filter((good: { color: string }) => good.color === 'red'),
      });
    });
  };

  render() {
    const { listOfGoods } = this.state;

    return (
      <div>
        <GoodsList goods={listOfGoods} />
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
            Load all goods
        </button>
        <button
          type="button"
          onClick={this.loadFirstFiveGood}
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
