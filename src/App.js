import React from 'react';

import './App.scss';
import { GoodList } from './GoodList';
import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadAllGoods = () => {
    getAll()
      .then(goods => this.setState({ goods }));
  }

  loadFive = () => {
    get5First()
      .then(goods => this.setState({ goods }));
  }

  loadRed = () => {
    getRedGoods()
      .then(goods => this.setState({ goods }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={this.loadFive}
        >
          Load 5 First Goods
        </button>
        <button
          type="button"
          onClick={this.loadRed}
        >
          Load Red Goods
        </button>
        <GoodList goods={goods} />
      </>
    );
  }
}
