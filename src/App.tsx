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

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({
      goods,
    });
  };

  loadFirstFiveGoods = async () => {
    const goods = await get5First();

    this.setState({
      goods,
    });
  };

  loadRedGoods = async () => {
    const goods = await getRed();

    this.setState({
      goods,
    });
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
            onClick={this.loadAllGoods}
          >
            Load All goods
          </button>
          <button
            className="button is-success is-light"
            type="button"
            onClick={this.loadFirstFiveGoods}
          >
            Load 5 first goods
          </button>
          <button
            className="button is-success is-light"
            type="button"
            onClick={this.loadRedGoods}
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
