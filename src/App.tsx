import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

export class App extends React.Component<{}, {}> {
  state = {
    goods: [],
  };

  getGoods = async (callback : () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;
    const { getGoods } = this;

    return (
      <>
        <h1>Push on Button</h1>
        <button
          type="button"
          onClick={() => {
            getGoods(getAll);
          }}
        >
          Load All goods

        </button>
        <button
          type="button"
          onClick={() => {
            getGoods(get5First);
          }}
        >
          Load 5 first goods

        </button>
        <button
          type="button"
          onClick={() => {
            getGoods(getRedGoods);
          }}
        >
          Load red goods

        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}
