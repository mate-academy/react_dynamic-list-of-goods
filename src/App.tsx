import React from 'react';
import './App.scss';
import GoodsList from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  loadedGoods: Good[] | [];
};

class App extends React.Component<{}, State> {
  state = {
    loadedGoods: [],
  };

  loadGoods = (callback: () => Promise<Good[]>) => {
    callback().then((goods) => this.setState({ loadedGoods: goods }));
  };

  render() {
    const { loadedGoods } = this.state;

    return (
      <div>
        <h1>Dynamic list of Goods</h1>
        <div>
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {loadedGoods.length > 0 && (
          <GoodsList goods={loadedGoods} />
        )}
      </div>

    );
  }
}

export default App;
