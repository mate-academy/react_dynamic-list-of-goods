import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: null,
  }

  async requestGoods(func) {
    const goodsFromServer = await func();

    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" className="button" onClick={() => this.requestGoods(getAll)}>
          Get All
        </button>
        <button type="button" className="button" onClick={() => this.requestGoods(get5First)}>
          Get 5 first
        </button>
        <button type="button" className="button" onClick={() => this.requestGoods(getRedGoods)}>
          Get Red
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}
