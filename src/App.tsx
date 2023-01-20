import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

type State = {
  visibleGoods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    visibleGoods: [],
  };

  handleAllGoods = async () => {
    const allUsers = await getAll();

    this.setState({ visibleGoods: allUsers });
  };

  handle5Goods = async () => {
    const first5Users = await get5First();

    this.setState({ visibleGoods: first5Users });
  };

  handleRedGoods = async () => {
    const redUsers = await getRedGoods();

    this.setState({ visibleGoods: redUsers });
  };

  render() {
    const { visibleGoods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={this.handleAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={this.handle5Goods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={this.handleRedGoods}
        >
          Load red goods
        </button>

        <GoodsList goods={visibleGoods} />
      </div>
    );
  }
}
