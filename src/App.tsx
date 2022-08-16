import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type State = {
  goods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = async () => {
    await getAll()
      .then(goods => this.setState({ goods }));
  };

  load5FirstGoods = async () => {
    await get5First()
      .then(goods => this.setState({ goods }));
  };

  loadRedGoods = async () => {
    await getRedGoods()
      .then(goods => this.setState({ goods }));
  };

  render() {
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
          onClick={this.load5FirstGoods}
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

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
