/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[]
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = async () => {
    const allGoods = await getAll();

    this.setState({ goods: allGoods });
  };

  loadFiveGoods = async () => {
    const fiveGoods = await get5First();

    this.setState({ goods: fiveGoods });
  };

  loadRedGoods = async () => {
    const redGoods = await getRedGoods();

    this.setState({ goods: redGoods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={this.loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}
