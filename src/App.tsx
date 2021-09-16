import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component {
  state: State = {
    goods: [],
  };

  loadAllGoods = async () => {
    const goods = await getAll();

    this.setState({ goods });
  };

  loadFiveFirst = async () => {
    const goods = await get5First();

    this.setState({ goods });
  };

  loadRedGoods = async () => {
    const goods = await getRedGoods();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="mb-3">Dynamic list of Goods</h1>
        <GoodsList goods={goods} />

        <div className="d-flex gap-3 mt-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.loadAllGoods}
          >
            Load All Goods
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.loadFiveFirst}
          >
            Load 5 Goods
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.loadRedGoods}
          >
            Load Red Goods
          </button>
        </div>
      </div>
    );
  }
}

export default App;
