import React from 'react';

import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    goods: [],
  }

  async handleLoadedData(data) {
    const goods = await data();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="content shadow-sm p-3 mb-5 bg-body rounded">
        <h1>Dynamic list of Goods</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.handleLoadedData(getAll)}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.handleLoadedData(get5First)}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.handleLoadedData(getRed)}
        >
          Load red goods
        </button>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
