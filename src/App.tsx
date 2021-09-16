/* eslint-disable react/no-unused-state */
import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

interface State {
  goods: Good[];
  hasLoadingError: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    hasLoadingError: false,
  };

  getGoods = async (loadType:() => Promise<Good[]>) => {
    try {
      const goods = await loadType();

      this.setState({
        goods,
        hasLoadingError: false,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
      });
    }
  };

  render() {
    const { goods, hasLoadingError } = this.state;

    return (
      <div className="App container-sm mx-auto">
        <h1 className="text-center">Dynamic list of Goods</h1>
        {!hasLoadingError && (
          <GoodsList goods={goods} />
        )}
        <div className="d-flex p-2 bd-highlight justify-content-center">
          <button
            type="button"
            onClick={() => this.getGoods(getAll)}
          >
            Load All goods
          </button>

          <button
            type="button"
            onClick={() => this.getGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            onClick={() => this.getGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
      </div>
    );
  }
}

export default App;
