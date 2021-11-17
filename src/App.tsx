import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

type State = {
  goods: Good[];
  hasLoadingError: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    hasLoadingError: false,
  };

  loadData = async (callback: () => Promise<Good[]>) => {
    this.setState({ hasLoadingError: false });

    try {
      const data = await callback();

      this.setState({ goods: data });
    } catch (error) {
      this.setState({ hasLoadingError: true });
    }
  };

  render() {
    const { goods, hasLoadingError } = this.state;

    return (
      <section className="goods">
        <h1 className="goods__title">Dynamic list of goods</h1>
        <div className="goods__navigation btn-group">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.loadData(getAll)}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.loadData(get5First)}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.loadData(getRedGoods)}
          >
            Load red goods
          </button>
        </div>
        {hasLoadingError ? (
          <p>Oops ... Something went wrong, please try again</p>
        ) : (
          <GoodsList goods={goods} />
        )}
      </section>
    );
  }
}

export default App;
