import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  loadGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  load5First = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadColorRed = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={this.loadGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.load5First}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={this.loadColorRed}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
