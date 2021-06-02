import React from 'react';
import { GoodsList } from './components/GoodList/GoodsList';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state ={
    goods: [],
  }

  getGoods = async(callback) => {
    const result = await callback();

    this.setState({ goods: result });
  }

  render() {
    return (
      <div>
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
          onClick={() => this.getGoods(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
