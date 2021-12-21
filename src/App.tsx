import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

type State = {
  goods: Good [];
  isLoading: boolean;
  hasLoadingError: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: false,
    hasLoadingError: false,
  };

  loadGoods = async (promise: () => Promise<Good []>) => {
    this.setState({ isLoading: true });

    try {
      const goods = await promise();

      this.setState({
        isLoading: false,
        goods,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        hasLoadingError: true,
      });
    }
  };

  render() {
    const { goods, isLoading, hasLoadingError } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.loadGoods(getAll)}
            className="App__button"
          >
            Load All goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(get5First)}
            className="App__button"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={() => this.loadGoods(getRed)}
            className="App__button"
          >
            Load red goods
          </button>
        </div>
        {isLoading && <span>Loading...</span>}
        {(hasLoadingError && !isLoading) && <span>Loading Error</span>}
        {(goods.length > 0 && !isLoading) && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
