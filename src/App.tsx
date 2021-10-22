import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    const goods = await callback();

    this.setState({ goods });
  };

  render() {
    return (
      <div className="App">
        <div className="buttons-block">
          <button
            className="loadGoods-button"
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load goods
          </button>
          <button
            className="loadGoods-button"
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first
          </button>
          <button
            className="loadGoods-button"
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
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
