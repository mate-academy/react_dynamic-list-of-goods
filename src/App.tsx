import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  };

  loadingGoods = async (f: () => Promise<Good[]>) => {
    const goodsList = await f();

    this.setState({ goods: goodsList });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <button
          type="button"
          className="button.button"
          onClick={() => this.loadingGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button.button"
          onClick={() => this.loadingGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button.button"
          onClick={() => this.loadingGoods(getRedGoods)}
        >
          red
        </button>

        {goods.length !== 0 && (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}
