/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import { GoodsList } from './components/GoodsList/GoodsList';
import { LoadingError } from './components/LoadingError/LoadingError';
import { Loader } from './components/Loader/Loader';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
  isLoading: boolean;
  hasLoadingError: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    isLoading: false,
    hasLoadingError: false,
  };

  loadData = async (getData: () => Promise<Good[]>) => {
    this.setState({
      isLoading: true,
    });

    try {
      const goods = await getData();

      this.setState({
        goods,
        isLoading: false,
      });
    } catch {
      this.setState({
        hasLoadingError: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { goods, hasLoadingError, isLoading } = this.state;

    return (
      <div className="container">
        <h1 className="title">GOODS</h1>
        <button
          type="button"
          className="button is-link m-5"
          onClick={() => this.loadData(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          className="button is-success m-5"
          onClick={() => this.loadData(get5First)}
        >
          get5First
        </button>

        <button
          type="button"
          className="button is-danger m-5"
          onClick={() => this.loadData(getRedGoods)}
        >
          Load red goods
        </button>
        {hasLoadingError && <LoadingError />}
        {!hasLoadingError && (isLoading ? <Loader /> : <GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;
