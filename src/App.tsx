/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';

import { Goodslist } from './components/GoodsList/GoodsList';
import * as goodsAPI from './api/goods';

type State = {
  goods: Good[];
  loading: boolean;
  loadingError: boolean;
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: [],
    loading: false,
    loadingError: false,
  };

  getGoods = async (fetchCallback: () => Promise<Good[]>) => {
    this.setState({
      loading: true,
    });

    try {
      const goods = await fetchCallback();

      this.setState({ goods });
    } catch (error) {
      this.setState({ loadingError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { goods, loading, loadingError } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>
        <div className="app__buttons">
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.getGoods(goodsAPI.getAll)
            )}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.getGoods(goodsAPI.get5First)
            )}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="app__button"
            onClick={() => (
              this.getGoods(goodsAPI.getRedGoods)
            )}
          >
            Load red goods
          </button>
        </div>
        <div className="app__content">
          {loading && (
            <div>Loading...</div>
          )}
          {goods.length !== 0 && (
            <Goodslist goods={goods} />
          )}
          {loadingError && (
            <div>Error: 501 (Cant download files from server)</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
