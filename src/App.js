import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  async handleClick(serverRequest) {
    const goods = await serverRequest();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}
export default App;
