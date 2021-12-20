import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type State = {
  goods: Good [];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  setGoods = (data: Good[]) => this.setState({ goods: data });

  getAllGoods = () => getAll().then(this.setGoods);

  get5FirstGoods = () => get5First().then(this.setGoods);

  getRedGoods = () => getRed().then(this.setGoods);

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.getAllGoods}
            className="App__button"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={this.get5FirstGoods}
            className="App__button"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.getRedGoods}
            className="App__button"
          >
            Load red goods
          </button>
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
