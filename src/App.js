import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = (event) => {
    getAll().then((result) => {
      this.setState({
        goods: result,
      });
    });
  };

  get5 = () => {
    get5First().then((result) => {
      this.setState({
        goods: result,
      });
    });
  };

  getRed = () => {
    getRedGoods().then((result) => {
      this.setState({
        goods: result,
      });
    });
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.loadAll}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.get5}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.getRed}
        >
          Load red goods
        </button>

        <GoodsList list={this.state.goods} />
      </>
    );
  }
}
