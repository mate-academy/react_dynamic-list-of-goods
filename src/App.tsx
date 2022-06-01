import React from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodList';

type State = {
  goods: Good[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (func: () => Promise<Good[]>) => {
    const goods = await func();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="box card">
        <h1
          className="card-header-title title is-2"
        >
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <button
            className="button is-success is-light"
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            className="button is-success is-light"
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-success is-light"
            type="button"
            onClick={() => this.loadGoods(getRed)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
