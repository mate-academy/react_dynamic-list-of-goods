import React, { Component } from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

class App extends Component {
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
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.setGoods(get5First)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load All goods
        </button>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export default App;
