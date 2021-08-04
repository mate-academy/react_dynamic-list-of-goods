import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  setGoods = async(getGoods) => {
    const currentGoogs = await getGoods();

    this.setState({ goods: currentGoogs });
  }

  render() {
    const { goods } = this.state;

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
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.setGoods(getRedGoods)}
        >
          Load red goods
        </button>

        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
