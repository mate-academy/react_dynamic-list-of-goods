import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = async(getGoods) => {
    const goods = await getGoods();

    this.setState({ goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.setGoods(getAll)}
        >
          Load All Goods
        </button>
        <button
          type="button"
          onClick={() => this.setGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
