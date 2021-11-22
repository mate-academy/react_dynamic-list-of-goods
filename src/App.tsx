import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[]
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (loadedGoods: Promise<Good[]>) => {
    const goods = await loadedGoods;

    this.setState({ goods });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.loadGoods(getAll())}
        >
          Load All
        </button>

        <button
          type="button"
          onClick={() => this.loadGoods(get5First())}
        >
          Load 5
        </button>

        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods())}
        >
          Load red
        </button>
        <GoodsList
          goods={this.state.goods}
        />
      </>
    );
  }
}
