import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList/GoodsList';
// or
// import * as goodsAPI from './api/goods';

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
      <div className="app">
        <button
          type="button"
          onClick={() => this.loadGoods(getAll)}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => this.loadGoods(get5First)}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => this.loadGoods(getRedGoods)}
          className="app__button"
        >
          Load red goods
        </button>
        <ul>
          <GoodsList goods={goods} />
        </ul>
      </div>
    );
  }
}

export default App;
