import React from 'react';
import { GoodsList } from './components/GoodList';

import './App.scss';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.showGoods(getAllGoods)}
          >
            All goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(get5FirstGoods)}
          >
            First five goods
          </button>
          <button
            type="button"
            onClick={() => this.showGoods(getRedGoods)}
          >
            Red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
