import React from 'react';

import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showAllGoods = async() => {
    const goods = await getAll();

    this.setState({ goods });
  }

  showFirst5Goods = async() => {
    const goods = await get5First();

    this.setState({ goods });
  }

  showRedGoods = async() => {
    const goods = await getRedGoods();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={this.showAllGoods}
        >
          All goods
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showFirst5Goods}
        >
          First five goods
        </button>
        {' '}
        <button
          type="button"
          onClick={this.showRedGoods}
        >
          Red goods
        </button>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
