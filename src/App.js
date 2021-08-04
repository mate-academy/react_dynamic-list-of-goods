import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = (getGoods) => {
    getGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <button
          type="button"
          className="button btn-outline-success"
          onClick={() => this.getGoods(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button btn-outline-info"
          onClick={() => this.getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className=" button btn-outline-danger"
          onClick={() => this.getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
