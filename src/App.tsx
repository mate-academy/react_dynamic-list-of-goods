import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
};

export class App extends React.Component<object, State> {
  state: Readonly<State> = {
    goods: [],
  };

  handleLoadAll = () => {
    getAll().then(goods => this.setState({ goods }));
  };

  handleLoad5First = () => {
    get5First().then(goods => this.setState({ goods }));
  };

  handleLoadRed = () => {
    getRedGoods().then(goods => this.setState({ goods }));
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button type="button" data-cy="all-button" onClick={this.handleLoadAll}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.handleLoad5First}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={this.handleLoadRed}>
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
