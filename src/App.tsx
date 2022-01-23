import React from 'react';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { LoadingError } from './components/LoadingError';

class App extends React.Component {
  state = {
    goods: [],
    hasLoadingError: false,
  };

  loadGoods = async (callback: () => Promise<Good[]>) => {
    this.setState({
      hasLoadingError: false,
    });

    try {
      const goods = await callback();

      this.setState({
        goods,
      });
    } catch (error) {
      this.setState({
        hasLoadingError: true,
      });
    }
  };

  render() {
    const {
      goods,
      hasLoadingError,
    } = this.state;

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dynamic list of goods</h1>

          <div>
            <div className="buttons">
              <button
                type="button"
                className="button is-info is-outlined"
                onClick={() => this.loadGoods(getAll)}
              >
                Load all goods
              </button>
              <button
                type="button"
                className="button is-info is-outlined"
                onClick={() => this.loadGoods(get5First)}
              >
                Load 5 first goods
              </button>
              <button
                type="button"
                className="button is-info is-outlined"
                onClick={() => this.loadGoods(getRedGoods)}
              >
                Load red goods
              </button>
            </div>

            {goods ? (
              <GoodsList goods={goods} />
            ) : 'No goods yet'}

            {hasLoadingError && <LoadingError />}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
