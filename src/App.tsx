import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';
interface State {
  goods: Good[]
}

export class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  getGoodsList = async (goodsType: () => Promise<Good[]>) => {
    const goods = await goodsType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          className="goods-button"
          type="button"
          onClick={() => this.getGoodsList(getAll)}
        >
          Load All goods
        </button>

        <button
          className="goods-button"
          type="button"
          onClick={() => this.getGoodsList(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="goods-button"
          type="button"
          onClick={() => this.getGoodsList(getRedGoods)}
        >
          Load Red goods
        </button>
        <div>
          {goods && (
            <GoodsList goods={goods} />
          )}
        </div>
      </div>
    );
  }
}
