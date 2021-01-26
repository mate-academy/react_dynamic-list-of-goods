import React from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.Component {
  state = {
    goods: [],
  }

  getAllGoods = () => {
    getAll().then(result => this.setState({ goods: result }));
  }

  getFive = () => {
    get5First().then(result => this.setState({ goods: result }));
  }

  getRed = () => {
    getRedGoods().then(result => this.setState({ goods: result }));
  }

  render() {
    return (
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <h1 className="title">
          Dynamic list of Goods
        </h1>
        <div>
          <button
            className="button is-info mx-2"
            type="button"
            onClick={this.getAllGoods}
          >
            Load All goods
          </button>

          <button
            className="button is-info mx-2"
            type="button"
            onClick={this.getFive}
          >
            Load 5 first goods
          </button>

          <button
            className="button is-info mx-2"
            type="button"
            onClick={this.getRed}
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
