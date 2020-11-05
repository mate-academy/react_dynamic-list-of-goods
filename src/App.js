import React from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

import './App.scss';

class App extends React.Component {
  state = {
    goods: [],
  }

  getGoods = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;
    const { getGoods } = this;

    return (
      <div className="container text-center my-5">
        <button
          type="button"
          className="btn btn-primary btn-lg mx-2"
          onClick={() => getGoods(getAll)}
        >
          Load all goods
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg mx-2"
          onClick={() => getGoods(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg mx-2"
          onClick={() => getGoods(getRedGoods)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
