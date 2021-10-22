import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goods: Good[];
  errorMessage: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    errorMessage: '',
  };

  loadedGoods = async (goodsLoader: () => Promise<Good[]>) => {
    try {
      const goods = await goodsLoader();

      this.setState({ goods });
    } catch (error) {
      this.setState({ errorMessage: 'No goods' });
    }
  };

  render() {
    const { goods, errorMessage } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Dynamic list of Goods</h1>
        <div className="App__buttons">
          <button
            className="App__buttons-button"
            type="submit"
            onClick={() => this.loadedGoods(getAll)}
          >
            Load all goods
          </button>

          <button
            className="App__buttons-button"
            type="submit"
            onClick={() => this.loadedGoods(get5First)}
          >
            Load 5 first goods
          </button>

          <button
            className="App__buttons-button"
            type="submit"
            onClick={() => this.loadedGoods(getRedGoods)}
          >
            Load red goods
          </button>
        </div>

        { !errorMessage ? (
          <GoodsList goods={goods} />
        )
          : (
            { errorMessage }
          )}
      </div>
    );
  }
}

export default App;
