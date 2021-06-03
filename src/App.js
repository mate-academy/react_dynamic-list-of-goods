import React from 'react';
import { GoodsList } from './components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllGoods = (callback) => {
    callback()
      .then(goods => this.setState({ goods }));
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.getAllGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.getAllGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.getAllGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
