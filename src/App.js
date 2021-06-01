import React from 'react';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import GoodsList from './components/GoodsList';

class App extends React.Component {
  state={
    goods: [],
  }

  goodsFilter = (callback) => {
    callback()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          onClick={() => this.goodsFilter(getAll)}
          type="button"
        >
          Load All goods
        </button>
        <button
          onClick={() => this.goodsFilter(get5First)}
          type="button"
        >
          Load 5 first goods
        </button>
        <button
          onClick={() => this.goodsFilter(getRed)}
          type="button"
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
