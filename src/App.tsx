import React from 'react';

import { GoodsList } from './components/GoodsList';
import { Loader } from './components/Loader';
import { LoadingError } from './components/LoadingError';

import { Good } from './types/Good';

import { getAllGoods, get5FirstGoods, getRedGoods } from './api/goods';

import './App.scss';
import './utils/reset.scss';

type State = {
  goods: Good[] | [];
  isLoading: boolean;
  isReceived: boolean;
  hasLoadingError: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
    isReceived: false,
    hasLoadingError: false,
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
      hasLoadingError: false,
    });

    try {
      const goods = await getGoods();

      this.setState({
        goods,
        isReceived: true,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    // eslint-disable-next-line object-curly-newline
    const { goods, isLoading, isReceived, hasLoadingError } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <div className="App__actions">
            <button
              type="button"
              className="App__button"
              onClick={() => this.loadGoods(getAllGoods)}
            >
              Load All goods
            </button>
            <button
              type="button"
              className="App__button"
              onClick={() => this.loadGoods(get5FirstGoods)}
            >
              Load 5 first goods
            </button>
            <button
              type="button"
              className="App__button"
              onClick={() => this.loadGoods(getRedGoods)}
            >
              Load red goods
            </button>
          </div>

          <div className="App__goods">
            {isLoading && <Loader />}
            {isReceived && <GoodsList goods={goods} />}
          </div>

          {hasLoadingError && <LoadingError className="App__loading-error" />}
        </div>
      </div>
    );
  }
}

export default App;
