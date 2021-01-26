import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = (event) => {
    const sortType = () => {
      switch (event.target.name) {
        case 'getRed':
          return getRedGoods();

        case 'get5':
          return get5First();

        default:
          return getAll();
      }
    };

    sortType().then((result) => {
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
          onClick={this.loadGoods}
        >
          Load All goods
        </button>

        <button
          name="get5"
          type="button"
          onClick={this.loadGoods}
        >
          Load 5 first goods
        </button>

        <button
          name="getRed"
          type="button"
          onClick={this.loadGoods}
        >
          Load red goods
        </button>

        <GoodsList list={this.state.goods} />
      </>
    );
  }
}
