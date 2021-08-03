import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodsList';

export class App extends React.Component {
  state = {
    goods: [],
  }

  addGoods = (getSelectedKindOfGoods) => {
    getSelectedKindOfGoods()
      .then((goods) => {
        this.setState({ goods });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <GoodList goods={goods} />
        <div className="App__buttons">
          <button
            onClick={() => this.addGoods(getAll)}
            className="btn btn-lg btn-primary"
            type="button"
          >
            Load All goods
          </button>
          <button
            onClick={() => this.addGoods(get5First)}
            className="btn btn-secondary btn-lg"
            type="button"
          >
            Load 5 first goods
          </button>
          <button
            onClick={() => this.addGoods(getRedGoods)}
            className="btn btn-danger btn-lg"
            type="button"
          >
            Load red goods
          </button>
        </div>
      </div>
    );
  }
}
