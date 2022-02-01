import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodList/GoodList';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good[]
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods: [...goods],
    });
  };

  loadFiveGoods = async () => {
    const goods = await get5First();

    this.setState({
      goods: [...goods],
    });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({
      goods: [...goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.loadAllGoods}
        >
          Load All goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.loadFiveGoods}
        >
          Load 5 first goods
        </button>
        <button
          className="button"
          type="button"
          onClick={this.loadRedGoods}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </>
    );
  }
}

export default App;
