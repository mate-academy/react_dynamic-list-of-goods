import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: [],
  };

  loadAll = () => {
    getAll().then(goods => {
      this.setState({ goods });
    });
  };

  loadFirstFive = () => {
    get5First().then(goods => {
      this.setState({ goods });
    });
  };

  loadRed = () => {
    getRedGoods().then(goods => {
      this.setState({ goods });
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" data-cy="all-button" onClick={this.loadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.loadFirstFive}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={this.loadRed}>
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}
