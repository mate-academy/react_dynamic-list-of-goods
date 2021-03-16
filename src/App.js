import React from 'react';

import { GoodsList } from './Components/GoodsList';

import './App.scss';
import * as goodsApi from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = async() => {
    const goods = await goodsApi.getAll();

    this.setState({
      goods,
    });
  }

  load5First = async() => {
    const goods = await goodsApi.get5First();

    this.setState({
      goods,
    });
  }

  loadRedGoods = async() => {
    const goods = await goodsApi.getRedGoods();

    this.setState({
      goods,
    });
  }

  render() {
    const { loadAll, load5First, loadRedGoods, state: { goods } } = this;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={loadAll}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={load5First}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={loadRedGoods}
        >
          Load red goods only
        </button>

        <GoodsList
          goods={goods}
          message="Click any button to see some goods 😏"
        />
      </div>
    );
  }
}

export default App;
