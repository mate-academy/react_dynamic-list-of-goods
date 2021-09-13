import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[];
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (loadType:() => Promise<Good[]>) => {
    const goods = await loadType();

    this.setState({ goods });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        {goods.length > 0 && (
          <GoodsList goods={goods} />
        )}
        <div className="d-grid gap-3 mt-3">
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
            className="btn btn-outline-success"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
            className="btn btn-outline-success"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
            className="btn btn-outline-success"
          >
            Load red goods
          </button>
        </div>
      </div>
    );
  }
}

export default App;
