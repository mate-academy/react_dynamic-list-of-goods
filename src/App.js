import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './Components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  handleClick = (func) => {
    func()
      .then((goods) => {
        this.setState({
          goods,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          onClick={() => this.handleClick(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => this.handleClick(getRedGoods)}
        >
          Load red goods
        </button>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
