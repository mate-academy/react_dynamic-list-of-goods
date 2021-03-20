import React from 'react';
import { GoodsList } from './GoodsList/GoodsList';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  };

  getAllGoods = () => {
    getAll()
      .then(response => this.setState({
        goods: response,
      }));
  };

  getFiveGoods = () => {
    get5First()
      .then(response => this.setState({
        goods: response,
      }));
  };

  getOnlyRedGoods = () => {
    getRedGoods()
      .then(response => this.setState({
        goods: response,
      }));
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <div>
          <button
            type="button"
            onClick={this.getAllGoods}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={this.getFiveGoods}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.getOnlyRedGoods}
          >
            Load red goods
          </button>
        </div>
        {goods.length > 0 && <GoodsList goods={goods} />}
      </>
    );
  }
}

export default App;
