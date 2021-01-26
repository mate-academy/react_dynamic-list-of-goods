import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// import * as goodsAPI from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  };

  getGoods = (callback) => {
    callback()
      .then((result) => {
        this.setState({
          goods: result,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>

        {goods && (<GoodsList goodsList={goods} />)}
      </div>
    );
  }
}
