import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadData = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  loadFiveItem = async () => {
    const goods = await get5First();

    goods.length = 5;

    this.setState({ goods });
  };

  loadRedItem = async () => {
    const goods = (await getRedGoods()).filter(good => good.color === 'red');

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <button
          className="App__button"
          type="button"
          onClick={this.loadData}
        >
          Load All goods
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.loadFiveItem}
        >
          Load 5 first goods
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.loadRedItem}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
