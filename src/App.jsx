import React from 'react';

import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: null,
  }

  showAll = () => {
    this.requestGoods(getAll);
  }

  show5First = () => {
    this.requestGoods(get5First);
  }

  showRedGoods = async() => {
    this.requestGoods(getRedGoods);
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
        <button type="button" className="button" onClick={this.showAll}>
          Get All
        </button>
        <button type="button" className="button" onClick={this.show5First}>
          Get 5 first
        </button>
        <button type="button" className="button" onClick={this.showRedGoods}>
          Get Red
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}
