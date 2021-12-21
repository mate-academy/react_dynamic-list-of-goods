import React from 'react';
import './App.scss';

import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[] | [];
  isLoading: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
  };

  loadData = (method: { (): Promise<Good[]>; }) => {
    method()
      .then(goods => {
        this.setState({ goods });
      });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div className="App">
        <div className="App__content">
          <h1 className="title">
            Dynamic list of Goods
          </h1>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.loadData(getAll)}
            >
              Load All goods
            </button>

            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.loadData(get5First)}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.loadData(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          <div className="App__goodsList">
            {!isLoading && <GoodsList goods={goods} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
