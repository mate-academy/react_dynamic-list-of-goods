import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goodsList: [],
  }

  allGoods = async() => {
    const goods = await getAll();

    this.setState({ goodsList: goods });
  }

  first5Goods = async() => {
    const goods = await get5First();

    this.setState({ goodsList: goods });
  }

  redGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goodsList: goods });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.allGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={this.first5Goods}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={this.redGoods}
        >
          Load red goods
        </button>
        <GoodsList goodsList={this.state.goodsList} />
      </>
    );
  }
}

export default App;
