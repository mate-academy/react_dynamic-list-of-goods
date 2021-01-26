import React from 'react';
import GoodsList from './Component/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllGoods = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  getFifeGoods = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  getAllRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          onClick={this.getAllGoods}
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={this.getFifeGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={this.getAllRedGoods}
        >
          Load red goods
        </button>

        <div className="columns">
          {goods.length > 0 && (
            <div className="goods">
              <GoodsList goods={goods} />
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default App;
