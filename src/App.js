import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goodsList: [],
  }

  getGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goodsList: goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goodsList={this.state.goodsList} />
      </>
    );
  }
}

export default App;
