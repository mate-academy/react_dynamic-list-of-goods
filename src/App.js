import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';
import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  goodsFilter = (callback) => {
    callback()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.goodsFilter(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.goodsFilter(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.goodsFilter(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
