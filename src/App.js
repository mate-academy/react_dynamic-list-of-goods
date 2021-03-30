import React from 'react';
import GoodsList from './GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRed } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = async() => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  }

  getRedGoods = async() => {
    const goods = await getRed();

    this.setState({
      goods,
    });
  }

  getFirstFiveGoods = async() => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  }

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.getAllGoods}
        >
          Get All
        </button>

        <button
          type="button"
          onClick={this.getRedGoods}
        >
          Get red
        </button>

        <button
          type="button"
          onClick={this.getFirstFiveGoods}
        >
          Get 5 first
        </button>

        <GoodsList
          goods={this.state.goods}
        />
      </>
    );
  }
}

export default App;
