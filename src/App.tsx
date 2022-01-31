import React from 'react';

import { GoodList } from './components/GoodsList';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

type Props = {};
type State = {
  goods: Good[];
};

class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  handleAllGoodsRequest = async () => {
    const goods = await goodsAPI.getAll();

    this.setState({ goods });
  };

  handleFiveGoodsRequest = async () => {
    const goods = await goodsAPI.get5First();

    this.setState({ goods });
  };

  handleRedGoodsRequest = async () => {
    const goods = await goodsAPI.getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App content">
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <div className="buttons">
          <button
            className="button is-primary is-small"
            type="button"
            onClick={this.handleAllGoodsRequest}
          >
            Load All goods
          </button>
          <button
            className="button is-info is-small"
            type="button"
            onClick={this.handleFiveGoodsRequest}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-success is-small is-small"
            type="button"
            onClick={this.handleRedGoodsRequest}
          >
            Load red goods
          </button>
        </div>
        {goods.length > 0
          ? <GoodList goods={goods} />
          : (
            <p
              className="paragraph"
            >
              Any item didn&apos;t load yet
            </p>
          )}
      </div>
    );
  }
}

export default App;
