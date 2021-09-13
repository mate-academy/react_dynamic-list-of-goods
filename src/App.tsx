import React from 'react';
import './App.scss';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { GoodsList } from './components/GoodsList';

interface State {
  goods: Good[];
  hasError: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    hasError: false,
  };

  loadGoods = async (getGoods: () => Promise<Good[]>) => {
    try {
      const goods = await getGoods();

      this.setState({ goods });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  handleLoadAllGoods = () => {
    this.loadGoods(goodsAPI.getAll);
  };

  handleLoadRedGoods = () => {
    this.loadGoods(goodsAPI.getRedGoods);
  };

  handleLoadFirstFiveGoods = () => {
    this.loadGoods(goodsAPI.get5First);
  };

  render() {
    const { goods, hasError } = this.state;

    return (
      <div className="container is-flex is-justify-content-center">
        <div className="container is-flex is-flex-direction-column is-align-items-center">
          <h1 className="title is-1">Dynamic list of Goods</h1>

          {!hasError ? <GoodsList goods={goods} /> : (
            <div>
              Loading Error
            </div>
          )}

          <section className="container is-flex is-justify-content-center">
            <button
              className="button is-primary mr-2"
              type="button"
              onClick={this.handleLoadAllGoods}
            >
              Load all goods
            </button>

            <button
              className="button is-danger mr-2"
              type="button"
              onClick={this.handleLoadRedGoods}
            >
              Load red goods
            </button>

            <button
              className="button is-info"
              type="button"
              onClick={this.handleLoadFirstFiveGoods}
            >
              Load 5 first goods
            </button>
          </section>

        </div>
      </div>
    );
  }
}

export default App;
