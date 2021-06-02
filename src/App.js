import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Get All Goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Get first 5
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Get all red
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}
