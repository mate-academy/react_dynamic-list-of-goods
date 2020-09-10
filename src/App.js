import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadGoods = async(promise) => {
    const goods = await promise();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button type="button" onClick={() => this.loadGoods(getAll)}>
          Load all
        </button>
        <button type="button" onClick={() => this.loadGoods(get5First)}>
          Load first 5 goods
        </button>
        <button type="button" onClick={() => this.loadGoods(getRedGoods)}>
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
