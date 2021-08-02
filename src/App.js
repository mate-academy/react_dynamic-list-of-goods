import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state = {
    allGoods: [],
  };

  getAllGoods = (getGoods) => {
    getGoods().then((goods) => {
      this.setState({
        allGoods: goods,
      });
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center">Dynamic list of Goods</h1>
        <div className="d-flex gap-3 justify-content-center">
          <button
            type="button"
            onClick={() => this.getAllGoods(getAll)}
            className="btn btn-outline-primary"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.getAllGoods(get5First)}
            className="btn btn-outline-primary"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.getAllGoods(getRedGoods)}
            className="btn btn-outline-primary"
          >
            Load red goods
          </button>
        </div>
        <GoodsList goods={this.state.allGoods} />
      </>

    );
  }
}

export default App;
