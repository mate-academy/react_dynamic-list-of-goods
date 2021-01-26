import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (getSome) => {
    getSome().then((result) => {
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
          name="loadAll"
          type="button"
          onClick={() => this.loadGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          name="get5"
          type="button"
          onClick={() => this.loadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          name="getRed"
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList list={this.state.goods} />
      </>
    );
  }
}
