import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  async handleLoadedData(data) {
    const goods = await data();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="wrapper">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleLoadedData(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => this.handleLoadedData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.handleLoadedData(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
