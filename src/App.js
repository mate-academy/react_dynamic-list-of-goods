import React from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.Component {
  state = {
    products: [],
  }

  loadData = (getData) => {
    getData()
      .then(response => this.setState({
        products: response,
      }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.loadData(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.loadData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.loadData(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList listofProducts={this.state.products} />
      </>
    );
  }
}
