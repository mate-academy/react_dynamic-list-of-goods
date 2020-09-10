import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  loadAll = () => {
    getAll()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  load5First = () => {
    get5First()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  loadRedGoods = () => {
    getRedGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <div className="container">
          <button
            type="button"
            className="goods__button"
            onClick={this.loadAll}
          >
            Load All goods
          </button>

          <button
            type="button"
            className="goods__button"
            onClick={this.load5First}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="goods__button"
            onClick={this.loadRedGoods}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
