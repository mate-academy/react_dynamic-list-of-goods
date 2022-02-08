import React from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[],
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoodsHandler = (callback: () => Promise<Good[]>) => {
    callback()
      .then((goods: Good[]) => {
        this.setState({ goods });
      });
  };

  render() {
    return (
      <div className="card">
        <div className="nav">
          <button
            className="button is-link"
            type="button"
            onClick={() => this.loadGoodsHandler(getAll)}
          >
            Load All goods
          </button>
          <button
            className="button is-warning"
            type="button"
            onClick={() => this.loadGoodsHandler(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-danger"
            type="button"
            onClick={() => this.loadGoodsHandler(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
