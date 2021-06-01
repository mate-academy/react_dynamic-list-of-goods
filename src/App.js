import React from 'react';
import { GoodsList } from './GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  allGoods = (callback) => {
    callback().then(goods => this.setState({ goods }));
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={() => this.allGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.allGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.allGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
