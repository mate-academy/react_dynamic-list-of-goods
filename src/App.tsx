import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './Good';

type State = {
  goods: Good[],
};

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (listType: () => Promise<Good[]>) => {
    const goods = await listType();

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load First Five goods
        </button>
        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load Red goods
        </button>
        {this.state.goods && (
          <GoodsList goods={this.state.goods} />
        )}
      </>
    );
  }
}
