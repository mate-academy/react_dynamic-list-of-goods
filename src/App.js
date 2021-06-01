import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
    showGoods: false,
  }

  onLoadGoods = async(func) => {
    const goods = await func();

    this.setState({
      goods,
      showGoods: true,
    });
  }

  render() {
    const { goods, showGoods } = this.state;

    return (
      <div>
        <div>
          <h1>Dynamic list of Goods</h1>
          <button
            type="button"
            onClick={() => this.onLoadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.onLoadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.onLoadGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={goods} showGoods={showGoods} />
      </div>
    );
  }
}

export default App;
