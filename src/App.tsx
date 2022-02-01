import React from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[],
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: [],
  };

  loadAllGoodsHandler = async () => {
    getAll()
      .then(goodsFromServer => {
        this.setState({
          goods: [...goodsFromServer],
        });
      });
  };

  load5FirstGoodsHandler = async () => {
    this.setState({
      goods: await get5First(),
    });
  };

  loadRedGoodsHandler = async () => {
    this.setState({
      goods: await getRedGoods(),
    });
  };

  render() {
    return (
      <div className="card">
        <div className="nav">
          <button
            className="button is-link"
            type="button"
            onClick={this.loadAllGoodsHandler}
          >
            Load All goods
          </button>
          <button
            className="button is-warning"
            type="button"
            onClick={this.load5FirstGoodsHandler}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-danger"
            type="button"
            onClick={this.loadRedGoodsHandler}
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}
