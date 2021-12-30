import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

type State = {
  goods: Good[] | [],
  loading: boolean,
  hasLoadingError: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    loading: false,
    hasLoadingError: false,
  };

  getGoods = async (requestType: () => Promise<Good[]>) => {
    this.setState({ loading: true, hasLoadingError: false });

    try {
      const goods = await requestType();

      this.setState({ goods, loading: false });
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
      <div className="goods-card">
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

        {loading ? (
          <div className="spinner" />
        ) : (
          <GoodsList goods={goods} />
        )}

        {hasLoadingError && <div className="error">Error!</div>}
      </div>
    );
  }
}

export default App;
