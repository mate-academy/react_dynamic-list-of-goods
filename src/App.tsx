import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
  };

  loadGoods = async (loader: () => Promise<Good[]>) => {
    const goods = await loader();

    this.setState({ goods });
  };

  render() {
    const {
      goods,
    } = this.state;

    return (
      <div className="card">
        <h1>Dynamic list of Goods</h1>

        <GoodsList
          goods={goods}
        />

        <div className="button-container">
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
        </div>

      </div>
    );
  }
}

export default App;
