import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = (request: () => Promise<Good[]>) => {
    const requestResult = request()
      .then(goods => {
        this.setState({ goods });
      });

    return requestResult;
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="wrapper">
        <div className="App">
          <h1 className="alert alert-primary">Dynamic list of Goods</h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Load red goods
          </button>
          {goods.length === 0
            ? (
              <p className="alert alert-primary">
                Make your choice
              </p>
            )
            : (
              <GoodsList goods={goods} />
            )}
        </div>
      </div>
    );
  }
}

export default App;
