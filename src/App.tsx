import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[],
  loading: boolean,
  hasLoadingError: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    loading: false,
    hasLoadingError: false,
  };

  setGoods = async (method: () => Promise<Good[]>) => {
    this.setState({
      loading: true,
      hasLoadingError: false,
    });

    try {
      const goods = await method();

      this.setState({
        goods,
        loading: false,
        hasLoadingError: false,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
        loading: false,
      });
    }
  };

  render() {
    const {
      goods,
      loading,
      hasLoadingError,
    } = this.state;

    return (
      <div className="goods">
        <h1 className="goods__title">
          Dynamic list of goods
        </h1>

        <div className="goods__buttons">
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(getAll)}
          >
            Load all goods
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(get5First)}
          >
            Load first 5
          </button>
          <button
            type="button"
            className="goods__button"
            onClick={() => this.setGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        <>
          {!hasLoadingError && (
            loading
              ? 'Loading... ⏳'
              : <GoodsList goods={goods} />
          )}
        </>

        {hasLoadingError && (
          'Sorry! Failed to load goods 😔'
        )}

        {!goods.length && !loading && (
          <p>
            Click to start! 🛒
          </p>
        )}
      </div>
    );
  }
}

export default App;
