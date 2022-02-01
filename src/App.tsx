import React from 'react';
import './App.scss';
import GoodsList from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  getAllGoods = async () => {
    const res = await getAll();

    this.setState({
      goods: res,
    });
  };

  getFiveGoods = async () => {
    const res = await get5First();

    this.setState({
      goods: res,
    });
  };

  getRedGoods = async () => {
    const res = await getRedGoods();

    this.setState({
      goods: res,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            type="button"
            className="button is-link"
            onClick={this.getAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={this.getFiveGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="button is-link"
            onClick={this.getRedGoods}
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
