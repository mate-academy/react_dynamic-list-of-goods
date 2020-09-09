import React from 'react';

import './App.scss';
import { GoodList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

export class App extends React.PureComponent {
  state = {
    goods: [],
  }

  loadGoods = getGoods => getGoods()
    .then(goods => this.setState({ goods }))

  render() {
    const { goods } = this.state;

    return (
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => this.loadGoods(getAll)}
        >
          Load all
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => this.loadGoods(get5First)}
        >
          Load first 5
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => this.loadGoods(getRedGoods)}
        >
          Load only red
        </button>
        <GoodList goods={goods} />
      </div>
    );
  }
}
