import React from 'react';
import { GoodsList } from './component/GoodsList';

import './App.scss';

import { loadAllGoods, load5First, loadRedGoods } from './api/goods';

type State = {
  goods: Good[],
  errorMessage: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    errorMessage: '',
  };

  getGoods = async (getLoadingGoods: () => Promise<Good[]>) => {
    try {
      const goods = await getLoadingGoods();

      this.setState({ goods, errorMessage: '' });
    } catch (error) {
      const e = error as Error;

      this.setState({ errorMessage: e.message });
    }
  };

  render() {
    const { goods, errorMessage } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="btn-group">
          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getGoods(loadAllGoods)}
          >
            All goods
          </button>

          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getGoods(load5First)}
          >
            5 first goods
          </button>

          <button
            type="button"
            className="App__btn btn btn-secondary"
            onClick={() => this.getGoods(loadRedGoods)}
          >
            Red goods
          </button>
        </div>

        {!errorMessage ? (
          <GoodsList goods={goods} />
        ) : errorMessage}
      </div>
    );
  }
}

export default App;
